import { PhotoSection } from "../../../components/PhotoSection";
import { useHomePhotos } from "../../../hooks/useHomePhotos";

export const IndexPhotoSection = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage, isError } =
    useHomePhotos();
  return (
    <>
      <section className="w-11/12 ml-4">
        <h3 className="text-4xl font-bold mt-16">Popular Images</h3>
      </section>
      <PhotoSection
        data={data}
        isLoading={isLoading}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
        isError={isError}
      />
    </>
  );
};
