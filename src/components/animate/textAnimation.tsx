import { Flex, Spinner, Text, TextProps } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

interface Props extends TextProps {
  text: string;
  tcolor?: string;
  bgGrad?: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export const TextAnimation: FC<Props> = ({
  text,
  tcolor,
  bgGrad,
  children,
  onClose,
  ...rest
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = text;
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      onClose();
    }
  }, [isCompleted, onClose]);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      const newText = fullText.substring(0, index + 1);
      setDisplayedText(newText);
      index++;
      if (newText === fullText) {
        clearInterval(intervalId);
        setIsCompleted(true);
      }
    }, 300);
    return () => {
      clearInterval(intervalId);
    };
  }, [fullText]);

  return (
    <Flex
      w="100%"
      h="100%"
      position="fixed"
      top="0"
      left="0"
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.5)"
      zIndex="overlay"
    >
      <Flex flexDir="column" justifyContent="center" alignItems="center">
        <Text
          textColor={tcolor}
          bgGradient={bgGrad}
          bgClip="text"
          fontSize={{ base: "0.9rem", md: "1.8rem" }}
          textShadow={tcolor}
          mb={4}
          {...rest}
        >
          {displayedText}
        </Text>
        <Spinner color="red.500" size="xl" />
        {isCompleted ? (
          <>
            {children}
            <button onClick={onClose}>Close</button>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
};
