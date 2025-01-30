import React from 'react';

interface MessageFoundProps {
  foundCharacter: string | undefined;
  isSearched: boolean;
}

export const MessageFound: React.FC<MessageFoundProps> = ({ foundCharacter, isSearched }) => {
  return (
    <div className="flex justify-center">
      {isSearched === false && !foundCharacter && <h2 className="text-2xl text-center text-gray-500">Busca tu personaje.</h2>}

      {foundCharacter && (
        <h2 className="text-2xl text-center font-semibold text-terciary">
          ¡El personaje que coincide con tus preferencias es {foundCharacter}!
        </h2>
      )}

      {isSearched === true && !foundCharacter && (
        <h2 className="text-2xl text-center text-red-500 font-semibold">No se encontró ningún personaje con esos parámetros.</h2>
      )}
    </div>
  );
};
