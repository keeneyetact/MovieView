import { ContainerProps } from "@chakra-ui/react";
import { FC } from "react";
import { Popular } from "../popular";

const HomePage: FC<ContainerProps> = () => {
  return (
    <>
      <Popular />
    </>
  );
};

export default HomePage;
