module.exports = {
  images: {
    loader: 'akamai',
    path: '/'

  },

  reactStrictMode: false,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    }
    }
}
