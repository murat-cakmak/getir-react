module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {
            spacing: {
              '0.1': '0.063rem'
            },
            colors: theme => ({
                'brand-color': '#4c3398',
                'primary-brand-color': '#5d3ebc',
                'secondary-brand-color': '#7849f7',
                'brand-yellow': '#ffd300'
            }),
            backgroundImage: theme => ({
               'mobile-app': 'url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)',
                'phone': 'url(/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png)',
            }),
        },
    },
    plugins: [],
}
