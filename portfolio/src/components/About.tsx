import { Award, Clock, Heart, Users } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Heart size={24} />,
      title: 'Client-Focused',
      description: 'Your success is my priority. I listen to your needs and deliver solutions that work for your business.'
    },
    {
      icon: <Clock size={24} />,
      title: 'On-Time Delivery',
      description: 'I respect your time and deadlines. Projects are delivered on schedule without compromising quality.'
    },
    {
      icon: <Award size={24} />,
      title: 'Quality First',
      description: 'Every website is built with attention to detail, following best practices and modern standards.'
    },
    {
      icon: <Users size={24} />,
      title: 'Local Support',
      description: 'I\'m here when you need me. Get personalized support and maintenance for your website.'
    }
  ]

  const skills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript/React', level: 90 },
    { name: 'Next.js', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'Responsive Design', level: 95 }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer dedicated to helping local businesses succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Story */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building Digital Solutions for Local Businesses
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Hi! I'm a web developer with over 5 years of experience creating websites
                that help local businesses grow. I understand the unique challenges small
                businesses face, and I'm here to make getting online simple and affordable.
              </p>
              <p>
                What started as a passion for coding has evolved into a mission to help
                businesses in my community thrive in the digital age. I've worked with
                restaurants, shops, service providers, and more – each with their own
                unique story and needs.
              </p>
              <p>
                I believe every business deserves a professional online presence. That's
                why I focus on creating websites that are not only beautiful but also
                functional, fast, and easy to manage.
              </p>
              <p>
                When I'm not coding, you can find me exploring local businesses,
                staying up-to-date with the latest web technologies, or helping other
                entrepreneurs with their digital journey.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Let's Work Together
              </a>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-blue-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
