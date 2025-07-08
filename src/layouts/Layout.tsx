import type { ReactNode } from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaBars } from 'react-icons/fa'
import CookieConsent from '../components/CookieConsent'
import ScrollToTop from '../components/ScrollToTop'
import MobileMenu from '../components/MobileMenu'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0054a6]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto py-6">
          <div className="flex items-center justify-between gap-8">
            <Link to="/" className="text-[28px] font-black text-white tracking-[-0.02em] flex-shrink-0">
              FOP Printing
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-grow">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link mx-5 transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <Link
                to="tel:+97143334795"
                className="nav-link text-white/90 hover:text-white transition-colors duration-200"
              >
                +971 4 3334795
              </Link>
              <Link
                to="https://wa.me/971507343112"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-2.5 rounded-full bg-[#25D366] text-white hover:bg-[#22c35e] transition-all duration-200 nav-link"
              >
                <FaWhatsapp className="mr-2 text-[18px]" />
                WhatsApp
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-3 hover:bg-white/10 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open menu</span>
              <FaBars className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FOP Printing & Advertising</h3>
              <p className="text-gray-400">
                Shed No.05, Al Qusais Industrial Area 2,<br />
                Dubai, UAE
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-gray-400">Phone: +971 4 3334795</p>
              <p className="text-gray-400">Mobile: +971 50 734 3112</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FOP Printing & Advertising LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
      <CookieConsent />
    </div>
  )
}

export default Layout 