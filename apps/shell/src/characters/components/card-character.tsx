export interface CardData {
  id: number | string;
  image: string;
  name: string;
}

interface CardCharacterProps {
  character: CardData;
  match: string | null | undefined;
}
export const CardCharacter: React.FC<CardCharacterProps> = ({ character, match }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-1 relative box-border ${
        match && character.name === match ? 'border-4 border-[var(--color-terciary)]' : ''
      }`}
    >
      <img src={character.image} alt={character.name} className="w-24 h-24 object-cover rounded mb-2" />
      <p className="text-center">{character.name}</p>
    </div>
  );
};
