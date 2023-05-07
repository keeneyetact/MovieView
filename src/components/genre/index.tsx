import { FC } from "react";
import { Badge as CBadge, BadgeProps, Text } from "@chakra-ui/react";
import { GenresEntity, popular } from "../types";
import { API_KEY } from "../constant";

interface Props extends BadgeProps {
  data: GenresEntity;
  setMovies: React.Dispatch<React.SetStateAction<popular["results"]>>;
  selectedBadgeId: number | null;
  setSelectedBadgeId: (id: number | null) => void;
}

export const GenreBadges: FC<Props> = ({
  data,
  selectedBadgeId,
  setSelectedBadgeId,
  setMovies,
  ...rest
}) => {
  const { id, name } = data;

  const handleClick = async () => {
    try {
      setSelectedBadgeId(id);
      const query = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-GB&sort_by=popularity.desc&with_genres=${id}`
      );
      const { results } = await query.json();
      setMovies(results);
    } catch (error) {
      alert(error);
    }
  };

  const isActive = selectedBadgeId === id;

  return (
    <CBadge
      as="button"
      onClick={handleClick}
      borderRadius={4}
      fontSize={{ base: "", md: "lg" }}
      backgroundColor={isActive ? "#861B27" : "gray.200"}
      color={isActive ? "white" : "gray.700"}
      _hover={{ cursor: "pointer", color: "#861B27", backgroundColor: "#fff" }}
      {...rest}
    >
      <Text fontFamily="statusTags" fontWeight="normal" textTransform="none">
        {name}
      </Text>
    </CBadge>
  );
};
