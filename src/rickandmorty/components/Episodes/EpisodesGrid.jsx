import { useSelector } from "react-redux";
import { ComponentCardCharacter, ComponentList } from "../Common";

export const EpisodesGrid = () => {
  const { information } = useSelector((store) => store.episode);

  return (
    <>
      {
        <ComponentList>
          {information?.characters.map((charactersUrl) => (
            <ComponentCardCharacter key={charactersUrl} url={charactersUrl} />
          ))}
        </ComponentList>
      }
    </>
  );
};
