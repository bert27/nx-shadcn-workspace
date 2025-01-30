import { useState } from 'react';
import { useFetch, Cards, MessageFound, CustomForm, FormData } from '@shared';
import { endpoints } from '../services/Service';
import { ApiResponse } from '../characters/models/response';
import { useGlobalContext } from '../context/useGlobalContext';
import { Character } from '../characters/models/character';
import { CardCharacter } from '../characters/components/card-character';

export function PrincipalPage() {
  const { foundCharacter, cache, setFoundCharacter, setCache } = useGlobalContext();
  const [isSearched, setIsSearched] = useState(false);
  const { data, loading, error } = useFetch<ApiResponse>(endpoints.characters, cache, setCache);

  const onSubmit = (data: FormData) => {
    const { gender, species, status } = data;

    const characters: Character[] = cache[endpoints.characters]?.results || [];

    const matchedCharacters = characters.filter(
      (character) => character.gender === gender && character.species === species && character.status === status
    );

    if (matchedCharacters.length > 0) {
      const bestMatch = matchedCharacters[0];
      setFoundCharacter(bestMatch);
    } else {
      setFoundCharacter(undefined);
    }
    setIsSearched(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-2">Descubre tu Personaje!!</h1>
      <MessageFound foundCharacter={foundCharacter?.name} isSearched={isSearched} />

      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full md:w-[30%] min-h-[300px] bg-[#05002C] flex justify-center" id="column1">
          <CustomForm onSubmit={onSubmit} />
        </div>
        <div className="w-full md:w-[70%] min-h-[300px] background-primary flex flex-wrap gap-2" id="column2">
          <Cards
            data={data?.results}
            loading={loading}
            error={error}
            match={foundCharacter?.name}
            renderItem={(character, match) => <CardCharacter character={character} match={match} />}
          />
        </div>
      </div>
    </div>
  );
}

export default PrincipalPage;
