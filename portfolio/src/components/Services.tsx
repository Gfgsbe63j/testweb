import { Globe, ShoppingCart, Smartphone, Search, Wrench, Rocket } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: 'Business Websites',
      description: 'Professional websites that showcase your business and attract customers. Perfect for restaurants, shops, and service providers.',
      features: ['Custom Design', 'Contact Forms', 'Google Maps Integration']
    },
    {
      icon: <ShoppingCart size={32} />,
      title: 'E-Commerce Solutions',
      description: 'Online stores that help you sell products 24/7. Secure payment processing and inventory management included.',
      features: ['Product Catalogs', 'Shopping Cart', 'Payment Integration']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile-First Design',
      description: 'Websites optimized for mobile devices. Your customers can browse seamlessly on any screen size.',
      features: ['Responsive Layout', 'Touch-Friendly', 'Fast Loading']
    },
    {
      icon: <Search size={32} />,
      title: 'SEO Optimization',
      description: 'Get found on Google! I optimize your website to rank higher in search results and attract local customers.',
      features: ['Local SEO', 'Meta Tags', 'Fast Performance']
    },
    {
      icon: <Wrench size={32} />,
      title: 'Website Maintenance',
      description: 'Keep your website running smoothly with regular updates, backups, and technical support.',
      features: ['Regular Updates', 'Security Monitoring', 'Technical Support']
    },
    {
      icon: <Rocket size={32} />,
      title: 'Website Redesign',
      description: 'Modernize your existing website with fresh design and improved functionality to better serve your customers.',
      features: ['Modern Design', 'Better UX', 'Improved Speed']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to help your local business thrive online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 hover:border-blue-300"
            >
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
