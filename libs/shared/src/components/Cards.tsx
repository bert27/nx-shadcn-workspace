import React from 'react';

interface CardsProps<T> {
  data: T[] | undefined;
  loading: boolean;
  error: string | null;
  match: string | null | undefined;
  renderItem: (item: T, match: string | null | undefined) => React.ReactNode;
}

export const Cards = <T,>({ data, loading, error, match, renderItem }: CardsProps<T>) => {
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center w-full h-full">
          <div className="spinner-border text-blue-500 animate-spin" style={{ width: '3rem', height: '3rem' }}></div>
        </div>
      )}
      {error && <p>Error: {error}</p>}
      {data && !loading && (
        <div className="flex flex-wrap w-full justify-center p-3" id="cards">
          {data.map((child, index) => (
            <React.Fragment key={index}>{renderItem(child, match)}</React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};
