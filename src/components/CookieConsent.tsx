import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50"
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-gray-600 text-center md:text-left">
                <p>
                  We use cookies to enhance your experience. By continuing to visit this site you agree
                  to our use of cookies.{' '}
                  <a
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleAccept}
                  className="btn-primary min-w-[100px]"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent 