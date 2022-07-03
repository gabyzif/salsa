import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'Druk Wide';
        font-style: heavy;
        font-weight: 900;
        font-display: swap;
        src: url('../fonts/druk-wide-heavy.otf') format('otf');
      }
      /* latin */
      @font-face {
        font-family: 'Articulat CF';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('../fonts/ArticulatCF-Normal.ttf') format('ttf')
    }
      `}
  />
);

export default Fonts;
