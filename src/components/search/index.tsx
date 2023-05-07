import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { Movies } from "../types";
import { API_KEY } from "../constant";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Movies["results"]>([]);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const inputElement = useRef(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const fetchSearch = useCallback(async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-GB&query=${search}&page=1&include_adult=false`
    );
    const movies = await data.json();
    setResults(movies.results.slice(0, 7));
    setLoading(false);
  }, [search]);

  useEffect(() => {
    if (search.length <= 2) {
      setHidden(true);
      setResults([]);
      return;
    }
    const checkIfClickedOutside = (event: MouseEvent) => {
      // close the menu when the click area is outside the menu
      if (
        !hidden &&
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearch("");
        setHidden(true);
      }
    };

    setHidden(false);
    document.addEventListener("mousedown", checkIfClickedOutside);
    const timeoutId = setTimeout(() => fetchSearch(), 500);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [fetchSearch, search, hidden]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <Flex ref={searchRef}>
      <InputGroup
        borderRadius="full"
        mx="auto"
        w={{ base: "7rem", lg: "14rem" }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<BiSearch color="gray.300" />}
        />
        <Input
          borderColor="black"
          color="#fff"
          pr="4.5rem"
          type="text"
          placeholder="Search"
          _placeholder={{ color: "#fff" }}
          value={search}
          ref={inputElement}
          onChange={(e) => handleChange(e)}
        />
        <InputRightElement
          display={{ base: "none", lg: "flex" }}
          children={
            loading && (
              <Flex
                pos="absolute"
                top="0"
                right="0"
                alignItems="center"
                h="full"
                mr="2"
              >
                <Spinner
                  size="sm"
                  color="blue.600"
                  speed="0.65s"
                  thickness="4px"
                  emptyColor="gray.200"
                />
              </Flex>
            )
          }
        />
      </InputGroup>

      {!hidden && (
        <Box
          position="fixed"
          zIndex="50"
          bg="gray.800"
          border="1px solid"
          borderColor="gray.100"
          rounded="md"
          width={{ base: "52", md: "40", lg: "64" }}
          mt="16"
        >
          {results.length > 0 ? (
            results.map((movie, index) => (
              <Flex
                key={index}
                borderBottom="1px solid"
                borderRadius="2xl"
                borderColor="gray.700"
              >
                <Link
                  as={NextLink}
                  href={`/${movie.id}`}
                  display="flex"
                  w="100%"
                  _hover={{ bg: "gray.700" }}
                  alignItems="center"
                  borderRadius="2xl"
                  transition="ease-in-out 150ms"
                  px={3}
                  py={3}
                  onClick={() => {
                    setSearch("");
                    setHidden(true);
                  }}
                >
                  {movie.poster_path ? (
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      w="10"
                    />
                  ) : (
                    <Image
                      src="https://via.placeholder.com/264x352"
                      alt={movie.title}
                      w="10"
                    />
                  )}

                  <Text ml="4"> {movie.title}</Text>
                </Link>
              </Flex>
            ))
          ) : (
            <Box px="3" py="3">
              No results for {search}
            </Box>
          )}
        </Box>
      )}
    </Flex>
  );
};
export default Search;
