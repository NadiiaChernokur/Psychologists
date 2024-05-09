import { SpinnerDiamond, SpinnerDotted } from "spinners-react";
import { LoaderContainer } from "./Loader.styled";
export const Loader = () => {
  return (
    <LoaderContainer>
      <SpinnerDotted />
    </LoaderContainer>
  );
};

export const LoaderImg = () => {
  return <SpinnerDiamond />;
};
