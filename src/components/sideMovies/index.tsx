import { Flex, FlexProps, Heading, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { MiniMovie } from "../miniMovie";
import { now_playing } from "../types";

interface Props extends FlexProps {
  name: string;
  loading?: boolean;
  comingSoon: now_playing["results"];
  id: string;
}

export const SideMovies: FC<Props> = ({
  name,
  loading,
  comingSoon,
  id,
  ...rest
}) => {
  return (
    <Flex justifyContent="center" mx="auto" flexDir="column" id={id} {...rest}>
      <Heading fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }} mt={12}>
        {name}
      </Heading>
      <Flex flexDir="column" gap={8} mt={8} justifyContent="start">
        {!loading ? (
          comingSoon?.map((movie) => {
            return <MiniMovie data={movie} key={movie.id} />;
          })
        ) : (
          <Spinner
            size="sm"
            color="blue.600"
            speed="0.65s"
            thickness="4px"
            emptyColor="gray.200"
          />
        )}
      </Flex>
    </Flex>
  );
};
