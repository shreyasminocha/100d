module.exports = {
    siteMetadata: {
        title: '100D Political Model'
    },
    plugins: [
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-plugin-create-client-paths',
            options: { prefixes: ['/s/*'] },
        }
    ]
};
