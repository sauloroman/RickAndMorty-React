import styled from "@emotion/styled";
import { AppRouter } from "./router";
import { Sidebar } from "./ui/components/Sidebar";

const ContainerApp = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
`;

export const PageTitle = styled.h2`
  font-size: 2.4rem;
  color: #393A48;
  font-weight: 700;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #DDD;
  margin-bottom: 5rem;
`;

export const RickAndMortyApp = () => {
  return (
    <ContainerApp>
      <Sidebar />
      <AppRouter />
    </ContainerApp>
  );
};
