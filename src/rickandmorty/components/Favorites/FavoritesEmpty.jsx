import noFavoritesImg from '../../../../public/img/nofavorites-image.png'
import { 
  ComponentEmptyContainer, 
  ComponentEmptyDescription, 
  ComponentEmptyImage, 
  ComponentEmptyImageContainer, 
  ComponentEmptyInfo, 
  ComponentEmptyTitle } from "../Common"

export const FavoritesEmpty = () => {
  return (
    <ComponentEmptyContainer 
      style={{ marginTop: '10rem' }}
      className="animate__animated animate__fadeInUp">

    <ComponentEmptyImageContainer>
      <ComponentEmptyImage src={ noFavoritesImg } alt='Empty error image'/>
    </ComponentEmptyImageContainer>

    <ComponentEmptyInfo>
      <ComponentEmptyTitle>No favorites</ComponentEmptyTitle>
      <ComponentEmptyDescription>Start choosing your favorite characters. <br/>They will be here.</ComponentEmptyDescription>
    </ComponentEmptyInfo>

    </ComponentEmptyContainer>
  )
}
