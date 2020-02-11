module.exports = {
    siteMetadata: {
        title: '100D Political Model',
        description: 'A web app with (almost) 100 axes to represent your political ideology. Based on a largely ironic video by Jreg.'
    },
    plugins: [
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: { prefixes: ['/s/*'] },
        },
        'gatsby-plugin-sass'
    ]
};
