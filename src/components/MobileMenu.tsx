import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ path: string; label: string }>
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-xl z-50"
          >
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <Link to="/" className="text-2xl font-bold text-primary" onClick={onClose}>
                  FOP Printing
                </Link>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <FaTimes className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <nav className="flex-grow">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="block py-2 text-gray-600 hover:text-primary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="border-t border-gray-200 pt-4 space-y-4">
                <a
                  href="tel:+97143334795"
                  className="flex items-center text-gray-600 hover:text-primary"
                >
                  <FaPhone className="w-5 h-5 mr-3" />
                  <span>+971 4 3334795</span>
                </a>
                <a
                  href="https://wa.me/971507343112"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-700"
                >
                  <FaWhatsapp className="w-5 h-5 mr-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu 