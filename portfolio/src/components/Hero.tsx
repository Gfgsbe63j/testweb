import { ArrowRight, Code, Laptop, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Professional Web Development
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Grow Your Business with a
              <span className="text-blue-600"> Professional Website</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I help local businesses establish a powerful online presence with custom,
              modern websites that attract customers and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Start Your Project
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
              >
                View My Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-600">
                  Modern, maintainable code following industry best practices
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
                <p className="text-gray-600">
                  Looks perfect on all devices - mobile, tablet, and desktop
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                <p className="text-gray-600">
                  Optimized for speed to keep your visitors engaged
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
