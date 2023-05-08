import { ContainerProps, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ComingSoon } from "../coming_soon";
import { SectionContainer } from "../layout/SectionContainer";
import { NowPlaying } from "../now_playing";
import { Popular } from "../popular";
import { TopRated } from "../top_rated";

const HomePage: FC<ContainerProps> = () => {
  return (
    <>
      <Popular />
      <SectionContainer
        flexDirection={{ base: "column", md: "row" }}
        pt={{ base: 6, md: 4 }}
        justifyContent="space-between"
      >
        <NowPlaying />
        <Flex flexDirection="column" gap={8}>
          <ComingSoon />
          <TopRated />
        </Flex>
      </SectionContainer>
    </>
  );
};

export default HomePage;
