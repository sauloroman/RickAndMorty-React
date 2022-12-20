import { AppRouter } from "./router";
import styled from "@emotion/styled";
import { Sidebar } from "./ui/components/Sidebar";

const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const RickAndMortyApp = () => {
  return (
    <ContainerApp>
      <Sidebar />
      <AppRouter />
    </ContainerApp>
  );
};
