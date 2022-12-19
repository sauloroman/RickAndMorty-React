import styled from "@emotion/styled";

const PageTitleElement = styled.h2`
  font-size: 2.4rem;
  color: #393A48;
  font-weight: 700;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #DDD;
  margin-bottom: 2rem;
`;

export const PageTitle = ({ children }) => {
  return (
    <PageTitleElement>
      { children }
    </PageTitleElement>
  )
}
