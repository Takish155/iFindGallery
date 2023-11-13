import { InfiniteData } from "@tanstack/react-query";
import { Photo, PhotoData } from "../hooks/useHomePhotos";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ImageLoader } from "./ImageLoader";

export const ImageSectionLoader = ({
  data,
}: {
  data: InfiniteData<PhotoData, unknown> | undefined;
}) => {
  const matches2 = useMediaQuery("(max-width:900px)");
  const matches3 = useMediaQuery("(max-width:600px)");

  const renderImage = (image: Photo) => {
    return (
      <ImageLoader
        sponsorSiteLink={image.sponsorship?.tagline_url || ""}
        portfolioSiteLink={image.user?.portfolio_url}
        createdAt={image.created_at?.slice(0, 10) || ""}
        updatedAt={image.created_at?.slice(0, 10) || ""}
        promotedAt={image.promoted_at?.slice(0, 10) || ""}
        download={image.links.download}
        description={image.description ?? ""}
        key={image.id} // key
        name={`${image.user.first_name} ${image.user.last_name ?? ""}`}
        imgLink={image.urls.regular}
        fullImgLink={image.urls.full}
        userImgLink={image.user.profile_image.small}
        alt={image.alt_description || ""}
        isForHire={image.user.for_hire}
        isSponsor={image.sponsorship ? true : false}
        sponsorMoto={image.sponsorship?.tagline}
        username={image.user.username}
      />
    );
  };

  // Screen 600px or less =>
  if (matches3) {
    return (
      <section className="mx-auto my-0 w-full flex justify-center flex-wrap gap-8">
        <div className="w-11/12">
          {data?.pages.map((page) => page.map((image) => renderImage(image)))}
        </div>
      </section>
    );
  }

  // Screen 900px or less =>
  if (matches2) {
    const firstMidColumn: Photo[] = [];
    const secondMidColumn: Photo[] = [];
    data?.pages.map((page) => {
      page?.forEach((ele, index) => {
        if (index % 2 === 0) {
          firstMidColumn.push(ele);
          return;
        }
        secondMidColumn.push(ele);
      });
    });

    return (
      <section className="mx-auto my-0 w-full flex justify-center flex-wrap">
        <div className="w-1/2">
          {firstMidColumn.map((image) => renderImage(image))}
        </div>
        <div className="w-1/2">
          {secondMidColumn.map((image) => renderImage(image))}
        </div>
      </section>
    );
  }

  // Screen 900px or higher =>

  const firstColumn: Photo[] = [];
  const secondColumn: Photo[] = [];
  const thirdColumn: Photo[] = [];

  data?.pages.forEach((page) => {
    page.forEach((ele, index) => {
      if (index % 3 === 0) {
        firstColumn.push(ele);
        return;
      }
      if (index % 2 === 0) {
        secondColumn.push(ele);
        return;
      }
      thirdColumn.push(ele);
    });
  });

  return (
    <section className="mx-auto my-0 w-full flex justify-center flex-wrap">
      <div className="w-1/3">
        {firstColumn.map((image) => renderImage(image))}
      </div>
      <div className="w-1/3">
        {secondColumn.map((image) => renderImage(image))}
      </div>
      <div className="w-1/3">
        {thirdColumn.map((image) => renderImage(image))}
      </div>
    </section>
  );
};
