import styled from "@emotion/styled"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import { FavoritesSlide } from "./FavoritesSlide";

const FavoritesSliderContainer = styled.div`
  margin: 5rem 0;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const FavoritesSlider = () => {

  const favorites = useSelector( store => store.favorites );

  return (
    <FavoritesSliderContainer className="animate__animated animate__fadeIn">
      <Swiper 
        centeredSlides={true}
        slidesPerView={ favorites.length < 4 ? favorites.length : 4}
        loop={true}
        navigation={true} 
        modules={[Navigation]} 
        className="mySwiper"
      > 

        {
          favorites.map( favorite => (
            <SwiperSlide>
              <FavoritesSlide key={ favorite.url } {...favorite}/>
            </SwiperSlide>
          ))
        }

      </Swiper>
    </FavoritesSliderContainer>
  )
}
