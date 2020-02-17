module.exports = {
    siteMetadata: {
        title: '100D Political Model',
        description: 'A web app with (almost) 100 axes to represent your political ideology. Based on a largely ironic video by Jreg.'
    },
    plugins: [
        'gatsby-plugin-mdx',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: '100D Political Model',
                short_name: '100D',
                start_url: '/',
                background_color: '#f5f5f5',
                theme_color: '#f5f5f5',
                display: 'standalone',
                icon: 'static/images/icon.png'
            }
        }
    ]
};
