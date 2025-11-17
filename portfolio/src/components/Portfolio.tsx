import { ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Local Restaurant Website',
      category: 'Restaurant',
      description: 'Modern website with online menu, reservations, and contact information for a popular local restaurant.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Tailwind', 'Responsive'],
      link: '#'
    },
    {
      title: 'Boutique E-Commerce Store',
      category: 'E-Commerce',
      description: 'Full-featured online store with product catalog, shopping cart, and secure checkout for a fashion boutique.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Stripe', 'SEO'],
      link: '#'
    },
    {
      title: 'Legal Services Website',
      category: 'Professional Services',
      description: 'Professional website for a law firm featuring service pages, attorney profiles, and contact forms.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Forms', 'Mobile'],
      link: '#'
    },
    {
      title: 'Fitness Studio Website',
      category: 'Health & Fitness',
      description: 'Dynamic website with class schedules, trainer profiles, and online booking system for a fitness studio.',
      image: '/api/placeholder/600/400',
      tags: ['Booking', 'Mobile', 'Fast'],
      link: '#'
    },
    {
      title: 'Real Estate Agency',
      category: 'Real Estate',
      description: 'Property listing website with search filters, detailed property pages, and agent contact system.',
      image: '/api/placeholder/600/400',
      tags: ['Search', 'Database', 'Maps'],
      link: '#'
    },
    {
      title: 'Coffee Shop Website',
      category: 'Food & Beverage',
      description: 'Cozy website featuring menu, location info, and online ordering for a local coffee shop.',
      image: '/api/placeholder/600/400',
      tags: ['Menu', 'Orders', 'Mobile'],
      link: '#'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some websites I've built for local businesses. Each project is crafted with care to meet specific business needs.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold mb-2">{project.category}</div>
                    <div className="text-sm">Project Screenshot</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm text-blue-600 font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  View Case Study
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to see your business featured here?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
