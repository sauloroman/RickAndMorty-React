import MapIcon from '@mui/icons-material/Map';
import { 
  ComponentBannerInformationContainer, 
  ComponentBannerInformationContent, 
  ComponentBannerQuantity, 
  ComponentBannerTitle, 
  ComponentBannerTitleContainer, 
  ComponentBannerTitleText } from "../Common";
import { useInformation } from "../../hooks";

export const LocationsInformation = () => {

  const { id, name, type, dimension, residents } = useInformation('location');

  return (
    <ComponentBannerInformationContainer 
      className="animate__animated animate__fadeInDown"
      style={{
        backgroundImage: `linear-gradient( to right bottom, rgba(50, 52, 94, 0.65), rgba(50, 52, 94, 0.65)), 
        url('../../../../public/img/banner-${Math.ceil( Math.random() * 6 )}.webp')`
      }}
    >

      <MapIcon />

      <ComponentBannerTitleContainer>
        <ComponentBannerTitle>{name}</ComponentBannerTitle>
        <ComponentBannerTitleText>{dimension}</ComponentBannerTitleText>
      </ComponentBannerTitleContainer>

      <ComponentBannerInformationContent>
        <p>Id: {id}</p>
        <p>Type: {type}</p>
        <ComponentBannerQuantity>Residents: {residents?.length}</ComponentBannerQuantity>
      </ComponentBannerInformationContent>
    </ComponentBannerInformationContainer>
  )
}
