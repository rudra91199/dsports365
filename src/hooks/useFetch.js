import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../axios";

export const useFetch = (url, queryKey) => {
  const { data: { data } = {}, isLoading } = useQuery({
    queryKey: queryKey,
    queryFn: () => {
      return makeRequest.get(url);
    },
  });
  return {data, isLoading};
};