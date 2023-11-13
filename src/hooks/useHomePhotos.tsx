import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export type Photo = {
  id: string;
  created_at: string | null;
  updated_at: string | null;
  promoted_at: string | null;
  likes: number;
  description?: string;
  alt_description?: string;
  user: {
    username: string;
    first_name: string;
    last_name: string;
    portfolio_url: string;
    profile_image: {
      small: string;
      large: string;
    };
    for_hire: boolean;
  };
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  links: {
    download: string;
  };
  sponsorship?: {
    tagline: string;
    tagline_url: string;
  };
};

export type PhotoData = Photo[];

export const useHomePhotos = () => {
  const fetchData = async ({ pageParam = 1 }) => {
    try {
      const response = await axios.get<PhotoData>(
        `https://api.unsplash.com/photos`,
        {
          params: {
            client_id: apiKey,
            order_by: "popular",
            page: pageParam,
            per_page: 30,
          },
        }
      );
      return response.data;
    } catch (err) {
      throw new Error((err as AxiosError).message);
    }
  };

  return useInfiniteQuery({
    queryKey: ["homePhotos"],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    initialPageParam: 1,
  });
};
