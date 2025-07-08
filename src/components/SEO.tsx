import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogUrl?: string
}

const SEO = ({ title, description, keywords, ogImage, ogUrl }: SEOProps) => {
  const siteName = 'FOP Printing & Advertising LLC'
  const defaultImage = '/og-image.jpg' // Replace with your default OG image

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{`${title} - ${siteName}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph meta tags */}
      <meta property="og:title" content={`${title} - ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage || defaultImage} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} - ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage || defaultImage} />

      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content={siteName} />
    </Helmet>
  )
}

export default SEO 