import axios, { AxiosError } from "axios";
import { useSearchParams } from "react-router-dom";
import { PhotoData } from "./useHomePhotos";
import { useInfiniteQuery } from "@tanstack/react-query";

const apiKey = import.meta.env.VITE_API_KEY;

type SearchPhotoData = {
  results: PhotoData;
};

export const useSearchPhotos = () => {
  const [searchQueryParams] = useSearchParams();
  const searchQuery = searchQueryParams.get("query");

  const fetchData = async ({ pageParam = 1 }) => {
    try {
      const response = await axios.get<SearchPhotoData>(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            client_id: apiKey,
            query: searchQuery,
            page: pageParam,
            per_page: 30,
          },
        }
      );
      return response.data.results;
    } catch (err) {
      throw new Error((err as AxiosError).message);
    }
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage, isError } =
    useInfiniteQuery({
      queryKey: ["searchData", searchQuery],
      queryFn: fetchData,
      getNextPageParam: (_, allPages) => allPages.length + 1,
      initialPageParam: 1,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    });

  return {
    data,
    isLoading,
    fetchNextPage,
    searchQuery,
    isFetchingNextPage,
    isError,
  };
};
