import { useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router";
import { PhotoData } from "./useHomePhotos";

const apiKey = import.meta.env.VITE_API_KEY;

export const useUserWorks = () => {
  const { username } = useParams();

  const fetchData = async ({ pageParam = 1 }) => {
    try {
      const response = await axios.get<PhotoData>(
        `https://api.unsplash.com/users/${username}/photos`,
        {
          params: {
            client_id: apiKey,
            page: pageParam,
            per_page: 30,
            order_by: "views",
          },
        }
      );
      return response.data;
    } catch (err) {
      throw new Error((err as AxiosError).message);
    }
  };

  return useInfiniteQuery({
    queryKey: ["userWorks", username],
    queryFn: fetchData,
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
