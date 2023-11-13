import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router";

const apiKey = import.meta.env.VITE_API_KEY;

export type UserProfile = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  instagram_username: string;
  twitter_username: string;
  portfolio_url: string | null;
  bio: string;
  for_hire: string;
  location: string;
  total_likes: number;
  total_photos: number;
  total_collections: number;
  followed_by_user: boolean;
  followers_count: number;
  following_count: number;
  downloads: number;
  social: {
    instagram_username: string;
    portfolio_url: string;
    twitter_username: string;
  };
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
  badge: {
    title: string;
    primary: boolean;
    slug: string;
    link: string;
  };
  links: {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
  };
};

export const useUserInfo = () => {
  const { username } = useParams();

  const fetchData = async () => {
    try {
      const response = await axios.get<UserProfile>(
        `https://api.unsplash.com/users/${username}`,
        {
          params: {
            client_id: apiKey,
          },
        }
      );
      return response.data;
    } catch (err) {
      throw new Error((err as AxiosError).message);
    }
  };

  return useQuery({
    queryKey: ["userInfo", username],
    queryFn: fetchData,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
