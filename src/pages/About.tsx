import { motion } from 'framer-motion'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import SEO from '../components/SEO'

const About = () => {
  const mapCenter = {
    lat: 25.2854,
    lng: 55.3711,
  }

  const mapStyles = {
    height: '400px',
    width: '100%',
  }

  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started operations in Dubai with a focus on quality printing services.',
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded services to include comprehensive advertising solutions.',
    },
    {
      year: '2018',
      title: 'Technology Upgrade',
      description: 'Invested in state-of-the-art printing technology for superior quality.',
    },
    {
      year: '2023',
      title: 'Market Leader',
      description: 'Became one of the leading printing and advertising companies in UAE.',
    },
  ]

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about FOP Printing & Advertising LLC, a leading printing company in Dubai with years of experience in delivering quality printing and advertising solutions."
        keywords="printing company dubai, advertising company uae, about fop printing, printing services history"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-100">
              Your trusted partner in printing and advertising solutions since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative and high-quality printing and advertising solutions that help our
                clients achieve their business objectives while maintaining the highest standards of
                customer service and environmental responsibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading printing and advertising solutions provider in the UAE, recognized for
                our innovation, quality, and commitment to customer success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600">
              A timeline of our growth and achievements over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="text-primary text-2xl font-bold mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
            <p className="text-gray-600">
              Shed No.05, Al Qusais Industrial Area 2, Dubai, UAE
            </p>
          </motion.div>

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
        </div>
      </section>
    </>
  )
}

export default About 