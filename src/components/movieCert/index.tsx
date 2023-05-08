import { Flex, Text } from "@chakra-ui/react";
import { FC, useCallback, useEffect, useState } from "react";
import { API_KEY } from "../constant";
import { ReleaseDatesEntity, ResultsEntity } from "../types";

interface Props {
  id: number;
}

export const MovieCert: FC<Props> = ({ id }) => {
  const [cert, setCert] = useState<ReleaseDatesEntity["certification"]>();
  const [loading, setLoading] = useState(false);

  const fetchMovieCert = useCallback(async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${API_KEY}&language=en-GB`
    );
    const certs = await data.json();

    const GB = certs.results.filter(
      (cert: ResultsEntity) => cert.iso_3166_1 === "GB"
    )[0];

    setCert(GB?.release_dates[0]?.certification);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    fetchMovieCert();
  }, [fetchMovieCert]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {cert ? (
        <Flex
          border="2px solid"
          borderColor="gray.200"
          borderRadius="md"
          mr="2"
          px="0.2rem"
        >
          {cert ? cert : ""}
        </Flex>
      ) : (
        ""
      )}
    </>
  );
};
