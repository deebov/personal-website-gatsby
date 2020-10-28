require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    siteTitleAlt: `Dilshod's personal website`,
    siteTitle: `Dilshod`,
    siteHeadline: `Dilshod's personal website`,
    siteUrl: `https://minimal-blog.lekoarts.de`,
    siteDescription: `I'm Dilshod - I make modern web and mobile apps that are delighful to use for
    useryone♿️. Besides developing those apps, I like to design them as well. Oh,
    yeah, and I am a coffee addict. If you happen to be in beautiful Almaty, hit me
    up, let's get some coffee☕️ and chat😉.`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@lekoarts_de`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
          {
            title: `Contact me`,
            slug: `mailto:deebov@yandex.com`,
            isExternal: true,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/deebov`,
          },
          {
            name: `Dribbble`,
            url: `https://dribbble.com/deebov`,
          },
          // {
          //   name: `Email`,
          //   url: `mailto:deebov@yandex.com`,
          // },
          // {
          //   name: `Twitter`,
          //   url: `https://twitter.com/deebovv`,
          // },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/dilshod.trbv`,
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
