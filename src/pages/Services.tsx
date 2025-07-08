import { motion } from 'framer-motion'
import {
  FaPrint,
  FaAd,
  FaFlag,
  FaImages,
  FaTag,
  FaCalendarAlt,
  FaPaintBrush,
  FaChartLine,
} from 'react-icons/fa'
import SEO from '../components/SEO'

const services = [
  {
    icon: <FaPrint className="w-12 h-12" />,
    title: 'Large Format Prints',
    description:
      'High-quality large format printing services for banners, posters, billboards, and more. We use state-of-the-art printing technology to ensure vibrant colors and sharp details.',
    features: ['Banners', 'Posters', 'Billboards', 'Vehicle Wraps', 'Wall Graphics'],
  },
  {
    icon: <FaImages className="w-12 h-12" />,
    title: 'Signage Solutions',
    description:
      'Comprehensive signage solutions for businesses of all sizes. From storefront signs to wayfinding systems, we help you make a lasting impression.',
    features: ['3D Letters', 'LED Signs', 'Directory Signs', 'Safety Signs', 'Wayfinding Systems'],
  },
  {
    icon: <FaPaintBrush className="w-12 h-12" />,
    title: 'Display & Pop-ups',
    description:
      'Eye-catching display solutions for events, exhibitions, and retail spaces. Our pop-up displays are designed for maximum impact and easy setup.',
    features: ['Roll-up Banners', 'Exhibition Stands', 'Pop-up Displays', 'Counter Displays', 'Backdrops'],
  },
  {
    icon: <FaTag className="w-12 h-12" />,
    title: 'Label Printing',
    description:
      'Custom label printing services for products, packaging, and promotional materials. We offer various materials and finishes to suit your needs.',
    features: ['Product Labels', 'Packaging Labels', 'Stickers', 'Security Labels', 'Warning Labels'],
  },
  {
    icon: <FaAd className="w-12 h-12" />,
    title: 'Advertising (ATL & BTL)',
    description:
      'Full-service advertising solutions covering both above-the-line and below-the-line marketing strategies to reach your target audience effectively.',
    features: ['TV & Radio', 'Print Media', 'Digital Marketing', 'Direct Marketing', 'Outdoor Advertising'],
  },
  {
    icon: <FaCalendarAlt className="w-12 h-12" />,
    title: 'Events & Exhibitions',
    description:
      'Complete event and exhibition solutions including design, printing, and setup. We help you create memorable experiences for your audience.',
    features: ['Event Branding', 'Exhibition Stands', 'Promotional Materials', 'Signage', 'Banners'],
  },
  {
    icon: <FaFlag className="w-12 h-12" />,
    title: 'Flags & Textile Printing',
    description:
      'High-quality flag and textile printing services using durable materials and fade-resistant inks. Perfect for outdoor and indoor applications.',
    features: ['National Flags', 'Corporate Flags', 'Beach Flags', 'Fabric Banners', 'Table Covers'],
  },
  {
    icon: <FaChartLine className="w-12 h-12" />,
    title: 'Marketing Consultancy',
    description:
      'Strategic marketing consultancy services to help you develop and execute effective marketing campaigns that drive results.',
    features: ['Strategy Development', 'Campaign Planning', 'Market Research', 'Brand Development', 'ROI Analysis'],
  },
]

const Services = () => {
  return (
    <>
      <SEO
        title="Our Services"
        description="Explore our comprehensive range of printing and advertising services including large format printing, signage solutions, events & exhibitions, and more."
        keywords="large format printing, signage solutions, exhibition stands, label printing, advertising services, events exhibitions, flags printing, marketing consultancy"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-100">
              Comprehensive printing and advertising solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 hover:shadow-lg group"
              >
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-50">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to discuss your specific requirements. We'll help you find the perfect solution
              for your business.
            </p>
            <a
              href="tel:+97143334795"
              className="btn-primary mr-4"
            >
              Call Us Now
            </a>
            <a
              href="https://wa.me/971507343112"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 text-white hover:bg-green-700"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services 