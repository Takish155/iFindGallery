import { useEffect } from "react";
import { PhotoSection } from "../../components/PhotoSection";
import { SearchSection } from "../../components/SearchSection";
import { useSearchPhotos } from "../../hooks/useSearchPhotos";

export const SearchPage = () => {
  const {
    searchQuery,
    data,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useSearchPhotos();

  useEffect(() => {
    document.title = `"${searchQuery}" search | iFindGallery`;
  });

  return (
    <main className="pt-32">
      <section className="w-11/12 mx-auto">
        <SearchSection />
        <h3 className="text-4xl font-bold mt-16">{searchQuery}</h3>
      </section>
      <PhotoSection
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isError={isError}
      />
    </main>
  );
};
