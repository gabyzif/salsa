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
        src: url('../fonts/ArticulatCF-Normal.ttf') format('ttf'), 
    }
    @font-face {
        font-family: 'Articulat CF';
        src: url('../fonts/ArticulatCF-Heavy.ttf') format('ttf'), 
        font-weight: 900;
    }
      `}
  />
);

export default Fonts;
