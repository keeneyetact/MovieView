import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { Layout } from "@/components/layout";
import { NextSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="cineclix"
        titleTemplate="%s"
        description="Where Cine meets Life"
      />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <FontFaces />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
