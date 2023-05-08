import { ContainerProps, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ComingSoon } from "../coming_soon";
import { NowPlaying } from "../now_playing";
import { Popular } from "../popular";
import { TopRated } from "../top_rated";

const HomePage: FC<ContainerProps> = () => {
  return (
    <>
      <Popular />
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <NowPlaying />
        <Flex flexDirection="column" gap={8}>
          <ComingSoon />
          <TopRated />
        </Flex>
      </Flex>
    </>
  );
};

export default HomePage;
