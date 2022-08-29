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
      @font-face {
        font-family: 'Druk Medium';
        font-style: medium;
        font-weight: 700;
        font-display: swap;
        src: url('../fonts/druk-wide-medium.otf') format('otf');
      }
      /* latin */
      @font-face {
        font-family: 'Articulat CF';
        src: url('../fonts/ArticulatCF-Normal.ttf') format('ttf'), 
    }
    @font-face {
        font-family: 'Articulat CF Heavy';
        src: url('../fonts/ArticulatCF-Heavy.ttf') format('ttf'), 
    }
      `}
  />
);

export default Fonts;
