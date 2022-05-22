module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Oswald',
      },
      colors: {
        'ed-darker': 'hsla(0, 0%, 0%, 0.9)',
        'ed-nav-hover': 'hsla(34, 32%, 57%, 0.4)',
        'ed-buy-button': 'hsla(34, 32%, 57%, 1)',
      },
      backgroundImage: {
        'ed-stars': "url('/src/imgs/stars.jpg')"
      }
    },
  },
  plugins: [],
}
