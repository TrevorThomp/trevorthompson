module.exports = {
	siteMetadata: {
		title: `tt.`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: "Trevor",
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-smoothscroll`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				displayName: true,
				preprocess: false,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: `gatsby-plugin-anchor-links`,
			options: {
				offset: -200,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					// {
					// 	// https://www.gatsbyjs.org/packages/gatsby-remark-external-links
					// 	resolve: "gatsby-remark-external-links",
					// 	options: {
					// 		target: "_blank",
					// 		rel: "nofollow noopener noreferrer",
					// 	},
					// },
					{
						// https://www.gatsbyjs.org/packages/gatsby-remark-images
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 700,
							linkImagesToOriginal: true,
							quality: 90,
							// tracedSVG: { color: config.colors.green },
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
	],
};
