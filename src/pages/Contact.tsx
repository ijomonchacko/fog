import { useState } from 'react'
import { motion } from 'framer-motion'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import SEO from '../components/SEO'

interface ContactFormData {
  name: string
  email: string
  service: string
  message: string
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  service: '',
  message: '',
}

const services = [
  'Large Format Prints',
  'Signage Solutions',
  'Display & Pop-ups',
  'Label Printing',
  'Advertising (ATL & BTL)',
  'Events & Exhibitions',
  'Flags & Textile Printing',
  'Other',
]

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const mapCenter = {
    lat: 25.2854,
    lng: 55.3711,
  }

  const mapStyles = {
    height: '400px',
    width: '100%',
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Implement form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with FOP Printing & Advertising LLC for all your printing and advertising needs. Located in Dubai, UAE."
        keywords="contact printing company dubai, printing services contact, advertising company contact, dubai printing contact"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-100">
              Get in touch with us for all your printing and advertising needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-6 text-center"
            >
              <FaPhone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+97143334795" className="text-gray-600 hover:text-primary">
                +971 4 3334795
              </a>
              <br />
              <a href="tel:+971507343112" className="text-gray-600 hover:text-primary">
                +971 50 734 3112
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6 text-center"
            >
              <FaWhatsapp className="w-8 h-8 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/971507343112"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600"
              >
                +971 50 734 3112
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6 text-center"
            >
              <FaEnvelope className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:info@fopprinting.com" className="text-gray-600 hover:text-primary">
                info@fopprinting.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6 text-center"
            >
              <FaMapMarkerAlt className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-600">
                Shed No.05, Al Qusais Industrial Area 2,
                <br />
                Dubai, UAE
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}>
                  <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={15}
                    center={mapCenter}
                  >
                    <Marker position={mapCenter} />
                  </GoogleMap>
                </LoadScript>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact 