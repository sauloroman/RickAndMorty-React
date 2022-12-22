import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { setTheme } from "../../../store/slices/theme.slice";

const ColorCardContainer = styled.div`
  border: 1px solid var(--border-color);
  padding: 1rem;
  border-radius: 15px;
  transition: all .4s;
  height: 15rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  transition: all .4s;
  cursor: pointer;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 2rem;
  }
`;

const ColorCardName = styled.p`
  text-align: center;
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 500;
`;

export const ColorCard = ({ name, color, buttonColor, textColor }) => {

  const dispatch = useDispatch();
  const theme = useSelector( store => store.theme );

  const onChangeTheme = () => dispatch( setTheme( name ) );

  return (
    <ColorCardContainer 
      onClick={ onChangeTheme }
      style={{ 
        backgroundColor: `${color}`,
        backgroundImage: `linear-gradient(to right bottom, ${color} 65%, ${buttonColor})`
      }}>
      <ColorCardName style={{ color: `${textColor}`}}>{ color }</ColorCardName>
      <CheckCircleIcon 
        style={{ 
          display: (name == theme) ? 'block' : 'none',
          color: `${textColor}`
        }} 
      />
    </ColorCardContainer>
  )
}
