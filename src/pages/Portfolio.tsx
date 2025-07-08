import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import SEO from '../components/SEO'

// Sample portfolio data - replace with actual project images and details
const portfolioItems = [
  {
    id: 1,
    title: 'Corporate Branding',
    category: 'branding',
    image: '/portfolio/branding-1.jpg',
    description: 'Complete branding solution for a corporate client.',
  },
  {
    id: 2,
    title: 'Exhibition Stand',
    category: 'exhibitions',
    image: '/portfolio/exhibition-1.jpg',
    description: 'Custom exhibition stand design and production.',
  },
  {
    id: 3,
    title: 'Vehicle Wrap',
    category: 'large-format',
    image: '/portfolio/vehicle-1.jpg',
    description: 'Full vehicle wrap design and installation.',
  },
  {
    id: 4,
    title: 'Retail Signage',
    category: 'signage',
    image: '/portfolio/signage-1.jpg',
    description: 'Custom retail signage solution.',
  },
  // Add more portfolio items as needed
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'branding', label: 'Branding' },
  { id: 'exhibitions', label: 'Exhibitions' },
  { id: 'large-format', label: 'Large Format' },
  { id: 'signage', label: 'Signage' },
]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = selectedCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <SEO
        title="Portfolio"
        description="Explore our portfolio of printing and advertising projects including branding, exhibitions, large format printing, and signage solutions."
        keywords="printing portfolio, advertising projects, branding examples, exhibition stands portfolio, signage projects"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-100">
              Showcasing our best work in printing and advertising
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="card overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <LazyLoadImage
                      src={item.image}
                      alt={item.title}
                      effect="blur"
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white z-10 hover:opacity-75"
                onClick={() => setSelectedItem(null)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="aspect-[16/9]">
                <LazyLoadImage
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  effect="blur"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-600">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Portfolio 