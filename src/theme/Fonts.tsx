import { Global } from "@emotion/react";

export const fonts = {
  heading:
    "'Poppins Bold', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  body: "'Poppins Regular', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Roboto', 'sans-serif'",
  tabs: "'Source Code Pro', 'monospace'",
};

export const FontFaces = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Poppins Regular';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(/assets/fonts/Poppins-Regular.woff) format('woff');
      }

      @font-face {
        font-family: 'Poppins Bold';
        font-style: normal;
        font-weight: normal;
        font-display: swap;
        src: url(/assets/fonts/Poppins-Bold.woff) format('woff');
      }

      @font-face {
        font-family: 'HafferXH';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url(/assets/fonts/HafferXH-SemiBold.woff) format('woff'),
             url(/assets/fonts/HafferXH-SemiBold.woff2) format('woff2');
      }

      @font-face {
        font-family: 'Source Code Pro';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/assets/fonts/SourceCodePro-Regular.woff) format('woff'),
              url(/assets/fonts/SourceCodePro-Regular.woff2) format('woff2');
      }
    `}
  />
);
