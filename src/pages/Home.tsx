import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaPrint, FaAd, FaFlag, FaImages, FaArrowRight, 
  FaAward, FaCrown, FaGem, FaChartLine, FaUsers,
  FaCheckCircle, FaGlobe, FaCertificate
} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import SEO from '../components/SEO'

const serviceHighlights = [
  {
    icon: <FaPrint className="w-12 h-12" />,
    title: 'Premium Large Format',
    description: 'Ultra-high resolution printing for stunning visual impact.',
    features: ['4K Resolution', 'Color Calibrated', 'Weather Resistant']
  },
  {
    icon: <FaAd className="w-12 h-12" />,
    title: 'Luxury Advertising',
    description: 'Bespoke advertising solutions for premium brands.',
    features: ['Brand Strategy', 'Premium Materials', 'Elite Design']
  },
  {
    icon: <FaFlag className="w-12 h-12" />,
    title: 'Custom Textiles',
    description: 'High-end textile printing with exceptional detail.',
    features: ['Fine Fabrics', 'Vibrant Colors', 'Precise Details']
  },
  {
    icon: <FaImages className="w-12 h-12" />,
    title: 'Exhibition Design',
    description: 'Stunning display solutions that command attention.',
    features: ['3D Design', 'LED Integration', 'Premium Build']
  },
]

const achievements = [
  { number: '15+', label: 'Years Experience', icon: <FaAward /> },
  { number: '2500+', label: 'Projects Completed', icon: <FaCrown /> },
  { number: '200+', label: 'Premium Clients', icon: <FaGem /> },
  { number: '98%', label: 'Client Satisfaction', icon: <FaChartLine /> },
]

const features = [
  {
    icon: <FaGlobe className="w-8 h-8" />,
    title: 'Global Standards',
    description: 'Meeting international quality benchmarks in printing and advertising.'
  },
  {
    icon: <FaCertificate className="w-8 h-8" />,
    title: 'Certified Excellence',
    description: 'ISO certified processes ensuring consistent premium quality.'
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: 'Expert Team',
    description: 'Industry veterans with decades of combined experience.'
  },
]

const testimonials = [
  {
    name: 'Sarah Anderson',
    role: 'Marketing Director',
    company: 'Luxury Retail Co.',
    content: 'FOP Printing delivered exceptional quality that perfectly matched our premium brand image.',
    image: '/testimonials/sarah.jpg'
  },
  {
    name: 'James Mitchell',
    role: 'CEO',
    company: 'Elite Events LLC',
    content: 'Their attention to detail and premium finish sets them apart in the industry.',
    image: '/testimonials/james.jpg'
  },
]

const Home = () => {
  const [statsRef, statsInView] = useInView({ triggerOnce: true })
  
  return (
    <>
      <SEO
        title="Premium Printing & Advertising Services in Dubai | FOP Printing"
        description="Dubai's leading luxury printing and advertising solutions. Experience unparalleled quality and service excellence."
        keywords="luxury printing dubai, premium advertising, high-end printing services, exhibition design dubai"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0054a6]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
          <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-5" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-[1400px] mx-auto text-center pt-20 pb-20"
          >
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="hero-heading">
                <span className="hero-heading-top">Elevate Your</span>
                <span className="hero-heading-bottom">Brand Vision</span>
              </h1>
            </motion.div>

            <motion.p 
              className="hero-subtext mt-8 mb-16 max-w-[800px] mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Experience unparalleled quality in printing and advertising solutions. 
              Where precision meets luxury, and vision becomes reality.
            </motion.p>

            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link 
                to="/contact" 
                className="btn-primary flex items-center group"
              >
                Start Your Premium Project
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/portfolio" 
                className="btn-outline"
              >
                Explore Our Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {achievements.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                >
                  <div className="text-[40px] font-black mb-1 text-white tracking-tight">
                    {item.number}
                  </div>
                  <div className="text-[15px] text-white/90 font-medium tracking-[-0.01em]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Services Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary">
                Premium Services
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Discover our range of high-end printing and advertising solutions, 
              crafted to elevate your brand's presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-white hover:bg-gradient-to-br hover:from-primary hover:to-blue-600 
                          shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="text-primary group-hover:text-white mb-6 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 mb-6 transition-colors duration-300">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 group-hover:text-blue-100 transition-colors duration-300">
                      <FaCheckCircle className="mr-2 text-primary group-hover:text-white" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-r from-primary to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-dark.png')] opacity-10" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Why Choose FOP Printing
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience the difference of working with Dubai's leading premium printing partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-dark p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-white mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-light.png')] opacity-5" />
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary">
                Client Testimonials
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              Hear from our esteemed clients about their experience working with FOP Printing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-primary">{testimonial.role}</p>
                    <p className="text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary via-blue-600 to-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-overlay.png')] opacity-10" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Let's create something extraordinary together. Contact us to discuss your premium printing needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-lg px-12 py-6 rounded-full bg-white text-primary 
                         hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Start Your Premium Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home 