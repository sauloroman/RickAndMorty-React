import { 
  ComponentEmptyContainer, 
  ComponentEmptyDescription, 
  ComponentEmptyImage, 
  ComponentEmptyImageContainer, 
  ComponentEmptyInfo, 
  ComponentEmptyTitle } from '../Common/ComponentEmpty';
import imageEmpty from '../../../../public/img/empty-image.png';

export const LocationEmpty = () => {
  return (
    <ComponentEmptyContainer className="animate__animated animate__fadeInUp">

      <ComponentEmptyImageContainer>
        <ComponentEmptyImage src={ imageEmpty } alt='Empty error image'/>
      </ComponentEmptyImageContainer>

      <ComponentEmptyInfo>
        <ComponentEmptyTitle>No residents here</ComponentEmptyTitle>
        <ComponentEmptyDescription>This is a place so boring. <br/>Try visit another one.</ComponentEmptyDescription>
      </ComponentEmptyInfo>

    </ComponentEmptyContainer>
  )
}
