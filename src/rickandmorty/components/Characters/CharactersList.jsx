import { useSelector } from "react-redux";
import { ComponentList } from "../Common";
import { CharactersCard } from "./";

export const CharactersList = () => {
  const characters = useSelector((store) => store.characters);

  return (
    <ComponentList>
      {characters?.map((character) => (
        <CharactersCard key={character.id} {...character} />
      ))}
    </ComponentList>
  );
};
