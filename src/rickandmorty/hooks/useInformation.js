import { useSelector } from "react-redux";

export const useInformation = ( feature ) => {
  const { information } = useSelector( store => store[`${feature}`] );
  const { id, name, type, dimension, residents, characters, air_date } = !!information && information;

  return {
    id, 
    name, 
    type, 
    dimension, 
    residents,
    characters,
    air_date
  }

}
