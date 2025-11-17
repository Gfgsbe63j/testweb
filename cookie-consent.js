// =====================================
// VAMA9 - GDPR Cookie Consent Manager
// Compliant with GDPR and ePrivacy Directive
// =====================================

class CookieConsent {
    constructor() {
        this.consentKey = 'vama9_cookie_consent';
        this.consentVersion = '1.0';
        this.bannerElement = null;
        this.analyticsLoaded = false;

        // Your Google Analytics 4 Measurement ID
        // REPLACE THIS WITH YOUR ACTUAL GA4 ID
        this.GA4_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 ID
    }

    init() {
        // Check if consent has already been given
        const consent = this.getConsent();

        if (consent === null) {
            // No consent yet - show banner
            this.showConsentBanner();
        } else if (consent.analytics === true) {
            // Analytics accepted - load Google Analytics
            this.loadGoogleAnalytics();
        }
    }

    getConsent() {
        try {
            const consentString = localStorage.getItem(this.consentKey);
            if (!consentString) return null;

            const consent = JSON.parse(consentString);

            // Check if consent version matches (for future updates)
            if (consent.version !== this.consentVersion) {
                return null;
            }

            return consent;
        } catch (error) {
            console.error('Error reading consent:', error);
            return null;
        }
    }

    saveConsent(analyticsConsent) {
        const consent = {
            version: this.consentVersion,
            analytics: analyticsConsent,
            timestamp: new Date().toISOString(),
            essential: true // Always true
        };

        try {
            localStorage.setItem(this.consentKey, JSON.stringify(consent));

            // If analytics accepted, load it
            if (analyticsConsent) {
                this.loadGoogleAnalytics();
            }
        } catch (error) {
            console.error('Error saving consent:', error);
        }
    }

    showConsentBanner() {
        // Create banner HTML
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Cookie consent');
        banner.setAttribute('aria-live', 'polite');

        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h3>🍪 Cookies și Confidențialitate</h3>
                    <p>Folosim cookies esențiale pentru funcționarea site-ului și cookies de analiză pentru a îmbunătăți experiența ta. Cookies de analiză sunt activate doar cu consimțământul tău.</p>
                    <div class="cookie-consent-links">
                        <a href="privacy-policy.html" target="_blank" rel="noopener">Politica de Confidențialitate</a>
                        <a href="cookie-policy.html" target="_blank" rel="noopener">Politica Cookies</a>
                    </div>
                </div>
                <div class="cookie-consent-actions">
                    <button id="cookie-accept-all" class="cookie-btn cookie-btn-primary">
                        Acceptă Toate
                    </button>
                    <button id="cookie-accept-essential" class="cookie-btn cookie-btn-secondary">
                        Doar Esențiale
                    </button>
                    <button id="cookie-settings" class="cookie-btn cookie-btn-link">
                        Personalizează
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
        this.bannerElement = banner;

        // Add event listeners
        document.getElementById('cookie-accept-all').addEventListener('click', () => this.acceptAll());
        document.getElementById('cookie-accept-essential').addEventListener('click', () => this.acceptEssential());
        document.getElementById('cookie-settings').addEventListener('click', () => this.showSettings());

        // Show banner with animation
        setTimeout(() => banner.classList.add('visible'), 100);
    }

    acceptAll() {
        this.saveConsent(true);
        this.hideConsentBanner();
        this.showConfirmationMessage('Toate cookies au fost acceptate');
    }

    acceptEssential() {
        this.saveConsent(false);
        this.hideConsentBanner();
        this.showConfirmationMessage('Doar cookies esențiale au fost acceptate');
    }

    showSettings() {
        // Replace banner content with detailed settings
        const content = this.bannerElement.querySelector('.cookie-consent-content');
        content.innerHTML = `
            <div class="cookie-consent-text">
                <h3>⚙️ Setări Cookies</h3>
                <div class="cookie-settings-list">
                    <div class="cookie-setting-item">
                        <div class="cookie-setting-header">
                            <label>
                                <input type="checkbox" checked disabled>
                                <strong>Cookies Esențiale</strong>
                                <span class="cookie-badge required">Necesare</span>
                            </label>
                        </div>
                        <p class="cookie-setting-desc">Necesare pentru funcționarea de bază a site-ului. Nu pot fi dezactivate.</p>
                    </div>
                    <div class="cookie-setting-item">
                        <div class="cookie-setting-header">
                            <label>
                                <input type="checkbox" id="analytics-toggle" checked>
                                <strong>Cookies de Analiză</strong>
                                <span class="cookie-badge optional">Opționale</span>
                            </label>
                        </div>
                        <p class="cookie-setting-desc">Google Analytics - ne ajută să înțelegem cum este folosit site-ul pentru a-l îmbunătăți. Date anonimizate.</p>
                    </div>
                </div>
            </div>
            <div class="cookie-consent-actions">
                <button id="cookie-save-settings" class="cookie-btn cookie-btn-primary">
                    Salvează Preferințele
                </button>
                <button id="cookie-back" class="cookie-btn cookie-btn-secondary">
                    Înapoi
                </button>
            </div>
        `;

        document.getElementById('cookie-save-settings').addEventListener('click', () => {
            const analyticsEnabled = document.getElementById('analytics-toggle').checked;
            this.saveConsent(analyticsEnabled);
            this.hideConsentBanner();
            this.showConfirmationMessage('Preferințele tale au fost salvate');
        });

        document.getElementById('cookie-back').addEventListener('click', () => {
            this.hideConsentBanner();
            this.showConsentBanner();
        });
    }

    hideConsentBanner() {
        if (this.bannerElement) {
            this.bannerElement.classList.remove('visible');
            setTimeout(() => {
                if (this.bannerElement && this.bannerElement.parentNode) {
                    this.bannerElement.parentNode.removeChild(this.bannerElement);
                    this.bannerElement = null;
                }
            }, 300);
        }
    }

    showConfirmationMessage(message) {
        const toast = document.createElement('div');
        toast.className = 'cookie-toast';
        toast.textContent = message;
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');

        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add('visible'), 100);

        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    loadGoogleAnalytics() {
        if (this.analyticsLoaded) return;

        // TODO: Replace G-XXXXXXXXXX with your actual Google Analytics 4 Measurement ID
        if (this.GA4_ID === 'G-XXXXXXXXXX') {
            console.warn('⚠️ Google Analytics ID not configured. Please update GA4_ID in cookie-consent.js');
            return;
        }

        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA4_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;

        gtag('js', new Date());

        // Configure GA4 with privacy settings
        gtag('config', this.GA4_ID, {
            'anonymize_ip': true, // Anonymize IP addresses
            'allow_google_signals': false, // Disable advertising features
            'allow_ad_personalization_signals': false, // No personalized ads
            'cookie_flags': 'SameSite=None;Secure' // Cookie security
        });

        this.analyticsLoaded = true;
        console.log('✅ Google Analytics loaded with consent');
    }

    // Public method to revoke consent (can be called from settings page)
    revokeConsent() {
        localStorage.removeItem(this.consentKey);

        // Remove GA cookies
        this.deleteCookie('_ga');
        this.deleteCookie('_gid');
        this.deleteCookie('_gat');

        // Clear all _ga_* cookies
        document.cookie.split(';').forEach(cookie => {
            const cookieName = cookie.split('=')[0].trim();
            if (cookieName.startsWith('_ga_')) {
                this.deleteCookie(cookieName);
            }
        });

        this.showConfirmationMessage('Consimțământul a fost revocat. Reîncarcă pagina pentru a vedea bannerul din nou.');
    }

    deleteCookie(name) {
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=None; Secure';
        document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    // Check if user has accepted analytics (for other scripts to use)
    hasAnalyticsConsent() {
        const consent = this.getConsent();
        return consent && consent.analytics === true;
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    window.cookieConsent = new CookieConsent();
    window.cookieConsent.init();
});

// Expose method to revoke consent globally
window.revokeCookieConsent = function() {
    if (window.cookieConsent) {
        window.cookieConsent.revokeConsent();
    }
};
