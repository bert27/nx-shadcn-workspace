import { Cards, useFetch, useGlobalContext } from '@shared';
import { CardCharacter } from './card-character';
import { ApiResponse } from '../models/response';
import { endpoints } from '../../services/Service';

export const CardsCharacters: React.FC = () => {
  const { setCache, cache, foundCharacter } = useGlobalContext();

  const { data, loading, error } = useFetch<ApiResponse>(endpoints.characters, cache, setCache);

  return (
    <Cards
      data={data?.results}
      loading={loading}
      error={error}
      match={foundCharacter?.name}
      renderItem={(character, match) => <CardCharacter character={character} match={match} />}
    />
  );
};
