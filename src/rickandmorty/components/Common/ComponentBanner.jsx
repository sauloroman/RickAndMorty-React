import styled from "@emotion/styled";

const ComponentBannerInformationContainer = styled.div`
  height: 20rem;
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  background-position: center;
  position: relative;
  box-shadow: 0 3px 3px rgba(0, 0, 0, .2);
  margin-bottom: 5rem;

  display: flex;
  align-items: center;
  padding: 3rem;
  justify-content: space-around;

  svg {
    position: absolute;
    top: 15%;
    left: 5%;
    color: #fff;
    font-size: 3rem;
  }
`;

const ComponentBannerTitleContainer = styled.div`
  text-align: center;
  padding: 1rem;
  border-radius: 15px;
  color: #fff;
`

const ComponentBannerTitle = styled.h1`
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 3.2rem;
  `;

const ComponentBannerTitleText = styled.p`
  font-weight: 300;
  font-size: 1.4rem;
`

const ComponentBannerInformationContent = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: #fff;
`

const ComponentBannerQuantity = styled.p`
  background-color: var(--button-color);
  padding: 1rem;
  border-radius: 100px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export {
  ComponentBannerInformationContainer,
  ComponentBannerTitleContainer,
  ComponentBannerTitle,
  ComponentBannerTitleText,
  ComponentBannerInformationContent,
  ComponentBannerQuantity
}