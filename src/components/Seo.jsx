import React from "react"
import Helmet from "react-helmet"
import imageFallback from "../images/opengraph.png"

const Seo = ({
  metaTitle = "Privacy Check",
  metaDescription,
  metaKeywords,
  openGraphTitle = "Privacy Check",
  openGraphDescription,
  openGraphImage = imageFallback,
  twitterUser = "@privacycheck",
  twitterTitle = "Privacy Check",
  twitterDescription,
  twitterImage,
  pathname = "/",
  siteName = "Privacy Check",
  siteUrl = "https://www.privacycheck.ai",
  noIndexNoFollow,
}) => (
  <Helmet>
    {metaTitle && <title>{metaTitle}</title>}
    {metaDescription && <meta name="description" content={metaDescription} />}

    <meta name="keywords" content={metaKeywords} />

    <meta property="og:url" content={`${siteUrl}${pathname}`} />
    <meta property="og:title" content={openGraphTitle} />
    <meta property="og:site_name" content={siteName} />
    <meta property="og:description" content={openGraphDescription} />

    {openGraphImage && (
      <meta
        property="og:image"
        content={`${openGraphImage.url}?w=1200&h=630`}
      />
    )}

    <meta name="twitter:site" content={twitterUser} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={twitterTitle} />
    <meta name="twitter:description" content={twitterDescription} />
    <meta name="twitter:url" content={`${siteUrl}${pathname}`} />

    {twitterImage && (
      <meta
        name="twitter:image:src"
        content={`${openGraphImage.url}?w=1200&h=630`}
      />
    )}

    {noIndexNoFollow && <meta name="robots" content="noindex, nofollow" />}
  </Helmet>
)
export default Seo
