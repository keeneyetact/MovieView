import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { Layout } from "@/components/layout";
import { NextSeo } from "next-seo";
import { useState } from "react";
import { TextAnimation } from "@/components/animate/textAnimation";

export default function App({ Component, pageProps }: AppProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnimationComplete = () => {
    setIsCompleted(true);
  };

  return (
    <ChakraProvider theme={theme}>
      <NextSeo
        title="Cineclix | Where Cinema meets Life"
        titleTemplate="%s"
        description="Cinema Website built by Okeke Emmanuel C"
      />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <FontFaces />

      {isCompleted ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <TextAnimation
          text="CINECLIX..."
          onClose={handleAnimationComplete}
          tcolor="white"
          bgGrad="linear(to-r, pink.500, pink.300, blue.500)"
        />
      )}
    </ChakraProvider>
  );
}
