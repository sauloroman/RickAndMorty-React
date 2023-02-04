import { useEffect } from "react";
import styled from "@emotion/styled";
import rickandmortylogo from "../../../public/img/logo.png";
import rickandmortylogin from "../../../public/img/login_image.png";
import { changeTheme } from "../../rickandmorty/helpers";
import { useSelector } from "react-redux";

const AuthLayoutContainer = styled.div`
  transition: all .4s;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const AuthLayoutContent = styled.div`
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const AuthLayoutHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const AuthLayoutCircle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--login-color);
`;

const AuthLayoutLogoImage = styled.img`
  width: 20rem;
`;

const AuthLayoutTitle = styled.h1`
  text-align: center;
  font-size: 3.6rem;
  font-weight: 900;
  color: var(--title-color);
  margin-bottom: 1rem;
  `;

const AuthLayoutSubtitle = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: var(--text-color);
  margin-bottom: 5rem;
`;

const AuthLayoutContainerImage = styled.div`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: skew(-20deg);
`;

const AuthLayotImage = styled.img`
  width: 50rem;
  transform: skew(20deg);
`;

const AuthLayoutYear = styled.p`
  font-size: 1.6rem;
`;

export const AuthLayout = ({ children, title, subtitle }) => {

  const theme = useSelector( store => store.theme );

  useEffect( () => {
    localStorage.setItem('theme', theme );
    changeTheme(theme);
  }, [ theme ]);

  return (
    <AuthLayoutContainer>
      <AuthLayoutContent>
        <AuthLayoutHeader>
          <AuthLayoutCircle></AuthLayoutCircle>
          <AuthLayoutLogoImage
            src={rickandmortylogo}
            alt="Rick and Morty logo"
          />
        </AuthLayoutHeader>

        <div>
          <AuthLayoutTitle>{title}</AuthLayoutTitle>
          <AuthLayoutSubtitle>{subtitle}</AuthLayoutSubtitle>

          {children}
        </div>

        <AuthLayoutYear>&copy; Roman Santillan { new Date().getFullYear() }</AuthLayoutYear>
      </AuthLayoutContent>

      <AuthLayoutContainerImage>
        <AuthLayotImage src={rickandmortylogin} alt="Login rick and morty" />
      </AuthLayoutContainerImage>
    </AuthLayoutContainer>
  );
};
