import { useState, useEffect, useCallback } from 'react';

interface FetchOptions<TBody> {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: TBody;
  customErrorMessage?: string;
}

interface FetchResponse<TData, TBody = undefined> {
  data: TData | null;
  loading: boolean;
  error: string | null;
  refetch: (overrideOptions?: FetchOptions<TBody>) => void;
}

/**
 * Hook useFetch
 * @param url - The endpoint URL.
 * @param cache - The current cache object.
 * @param setCache - Function to update the cache.
 * @param options - FetchOptions typed according to the endpoint.
 * @returns Object containing data, loading, error, and refetch.
 */
export function useFetch<TData, TBody = undefined>(
  url: string,
  cache: Record<string, any>,
  setCache: (url: string, data: any) => void,
  options?: FetchOptions<TBody>
): FetchResponse<TData, TBody> {
  const [data, setData] = useState<TData | null>(null);
  const [loading, setLoading] = useState<boolean>(!cache[url]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (overrideOptions?: FetchOptions<TBody>) => {
      try {
        setLoading(true);
        setError(null);

        const finalOptions = { ...options, ...overrideOptions };
        const response = await fetch(url, {
          method: finalOptions?.method || 'GET',
          headers: finalOptions?.headers,
          body: finalOptions?.body
            ? JSON.stringify(finalOptions.body)
            : undefined,
        });

        if (!response.ok) {
          const errorMessage = `${
            finalOptions.customErrorMessage || 'Error fetching data'
          }: ${response.statusText}`;
          setError(errorMessage);
          return;
        }

        const result = (await response.json()) as TData;
        setCache(url, result);
        setData(result);
      } catch (err) {
        const customErrorMessage =
          options?.customErrorMessage || 'Error desconocido';
        const errorMessage = `${customErrorMessage}: ${(err as Error).message}`;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [url, options, setCache]
  );

  useEffect(() => {
    if (!cache[url]) {
      void fetchData();
    } else {
      setData(cache[url] as TData);
    }
  }, [url, cache, fetchData]);

  const refetch = (overrideOptions?: FetchOptions<TBody>) => {
    void fetchData(overrideOptions);
  };

  return { data, loading, error, refetch };
}
