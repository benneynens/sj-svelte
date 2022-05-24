module.exports = {
  mode: 'jit',
  // purge: ['./src/**/*.svelte', './src/**/*.css'],
  content: [
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Source Sans Pro', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
      // spacing: {
      //   '128': '32rem',
      // }

    },
  },
  plugins: [require("daisyui")],
}
