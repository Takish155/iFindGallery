import { useEffect } from "react";
import { PhotoSection } from "../../components/PhotoSection";
import { useUserWorks } from "../../hooks/useUserWorks";
import { ProfileSection } from "./section/ProfileSection";
import { useParams } from "react-router";

export const UserPage = () => {
  const { username } = useParams();

  useEffect(() => {
    document.title = `${username} | iFindGallery`;
  });
  const { data, isLoading, fetchNextPage, isFetchingNextPage, isError } =
    useUserWorks();
  return (
    <main className="mt-32">
      <ProfileSection />
      <PhotoSection
        data={data}
        isError={isError}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </main>
  );
};
