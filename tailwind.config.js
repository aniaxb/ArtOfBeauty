/** @type {(tailwindConfig: object) => object} */
import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        caribbean: '#2C6463'
      }
    },
  },
  plugins: [],
});
