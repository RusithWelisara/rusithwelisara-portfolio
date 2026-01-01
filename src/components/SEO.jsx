import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, type = 'website' }) => {
  const siteTitle = 'Rusith Welisara';
  const fullTitle = `${title} | ${siteTitle}`;
  const siteUrl = 'https://rusithwelisara.vercel.app';
  const defaultDescription = 'Portfolio of Rusith Welisara, an engineer building AI systems, robots, and advanced digital platforms.';
  const defaultImage = '/og-image.png';

  const seo = {
    title: fullTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${url || ''}`,
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={type} />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Canonical link */}
      <link rel="canonical" href={seo.url} />

      {/* Structured Data (JSON-LD) for Person */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rusith Welisara",
          "url": siteUrl,
          "image": `${siteUrl}/image.png`,
          "jobTitle": "AI & Robotics Engineer",
          "sameAs": [
            "https://github.com/RusithWelisara",
            "https://linkedin.com/in/rusith-welisara"
          ],
          "description": defaultDescription
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
