module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {
        backgroundColor: theme => ({
          'brand-color': '#5d3ebc'
        })
      },
    },
    plugins: [],
  }