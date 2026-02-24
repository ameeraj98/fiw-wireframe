import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, ogImage, ogType = 'website' }) => {
  const siteName = "The Future is Wild @ The Hillocks";
  const fullTitle = `${title} | ${siteName}`;
  const defaultDescription = "Experience the evolution of the Hillocks in Glenorchy through immersive VR and AR.";
  const defaultOgImage = "https://i.imgur.com/19pCjfF.png"; // Your 360-view hero image

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={window.location.href} />

      {/* Open Graph (Facebook / LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
};

export default SEO;