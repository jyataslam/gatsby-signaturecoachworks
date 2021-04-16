module.exports = {
  siteMetadata: {
    title: `Signature Coachworks`,
    description: `Signature Coachworks was formed in 2009 by a group of experienced technicians from all facets of the RV and Motorcoach world. Signature Coachworks has become a household name among many high end conversion coach owners.`,
    author: `@signaturecoachworks`,
    keywords: `rv repair shop, coach repair, rv repair shop near me, coach repair near me, rv mechanic, rv mechanic near me, coach repair near me, coach repair beaumont, beaumont repair shop, repair shop`,
    siteUrl: `https://signaturecoachworks.netlify.app`,
    image: `src/images/logo/logo-blue-min.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-background-image`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
