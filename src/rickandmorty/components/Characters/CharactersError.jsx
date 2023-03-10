import { 
  ComponentEmptyContainer, 
  ComponentEmptyDescription, 
  ComponentEmptyImage, 
  ComponentEmptyImageContainer, 
  ComponentEmptyInfo, 
  ComponentEmptyNumber, 
  ComponentEmptyTitle } from '../Common/ComponentEmpty';
import imageError from '../../../../public/img/404-image.png';

export const CharactersError = () => {
  return (
    <ComponentEmptyContainer className="animate__animated animate__fadeInUp">

      <ComponentEmptyImageContainer>
        <ComponentEmptyImage src={ imageError } alt='404 error image'/>
      </ComponentEmptyImageContainer>

      <ComponentEmptyInfo>
        <ComponentEmptyNumber>404</ComponentEmptyNumber>
        <ComponentEmptyTitle>No results found</ComponentEmptyTitle>
        <ComponentEmptyDescription>We couldn't find what you searched for. <br/>Try searching again</ComponentEmptyDescription>
      </ComponentEmptyInfo>

    </ComponentEmptyContainer>
  )
}
