import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode="wait">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  )
}

export default App
