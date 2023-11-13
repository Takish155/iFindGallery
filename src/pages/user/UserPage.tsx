import { PhotoSection } from "../../components/PhotoSection";
import { useUserWorks } from "../../hooks/useUserWorks";
import { ProfileSection } from "./section/ProfileSection";

export const UserPage = () => {
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
