import { useState } from "react";

type UseLoadingReturn<T> = [boolean, (promise: Promise<T>) => Promise<T>];

export function useLoading<T>(): UseLoadingReturn<T> {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return [
    isLoading,
    async (promise: Promise<T>) => {
      setIsLoading(true);
      const result = await promise;
      setIsLoading(false);
      return result;
    },
  ];
}
