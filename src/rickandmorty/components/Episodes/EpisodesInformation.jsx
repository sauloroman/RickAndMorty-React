import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { 
  ComponentBannerInformationContainer, 
  ComponentBannerInformationContent, 
  ComponentBannerTitle, 
  ComponentBannerTitleContainer,
  ComponentBannerQuantity } from "../Common";
import { useInformation } from "../../hooks";
  
export const EpisodesInformation = () => {
  const { id, name, characters, air_date } = useInformation('episode');
  console.log({name, id, characters, air_date});
  return (
    <ComponentBannerInformationContainer
      className="animate__animated animate__fadeInDown"
      style={{
        backgroundImage: `linear-gradient( to right bottom, rgba(50, 52, 94, 0.65), rgba(50, 52, 94, 0.65)), 
                          url('../../../../public/img/banner-episode-${Math.ceil(Math.random() * 6)}.webp')`,
        backgroundPosition: '10% 30%'
      }}
    >
      <SmartDisplayIcon />

      <ComponentBannerTitleContainer>
        <ComponentBannerTitle>{name}</ComponentBannerTitle>
      </ComponentBannerTitleContainer>

      <ComponentBannerInformationContent>
        <p>Episode: {id}</p>
        <p>Date: {air_date}</p>
        <ComponentBannerQuantity>Characters: {characters?.length}</ComponentBannerQuantity>
      </ComponentBannerInformationContent>
    </ComponentBannerInformationContainer>
  );
};
