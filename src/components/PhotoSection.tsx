import { Grid, Skeleton, SxProps, useMediaQuery } from "@mui/material";
import { PhotoData } from "../hooks/useHomePhotos";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ImageSectionLoader } from "./ImageSectionLoader";
import { Theme } from "@emotion/react";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

const skeletonStyle: SxProps<Theme> = {
  display: "block",
  borderRadius: "0.75rem",
  width: "100%",
  height: "20rem",
  marginBottom: "1rem",
};

const skeletonContainer = {
  width: "30%",
  minWidth: "300px",
  margin: "2rem 0",
};

type Props = {
  data: InfiniteData<PhotoData> | undefined;
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<PhotoData>, Error>>;
  isFetchingNextPage: boolean;
  isError: boolean;
};

export const PhotoSection = ({
  data,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
  isError,
}: Props) => {
  const { ref, inView } = useInView();
  const matches2 = useMediaQuery("(max-width:900px)");
  const matches3 = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (isLoading) {
    return (
      <Grid
        item
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          width: "90%",
          margin: "0 auto",
        }}
      >
        {matches2 ? (
          <>
            <div style={skeletonContainer}>
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
            </div>
            <div style={skeletonContainer}>
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
            </div>
          </>
        ) : matches3 ? (
          <div style={skeletonContainer}>
            <Skeleton variant="rectangular" sx={skeletonStyle} />
            <Skeleton variant="rectangular" sx={skeletonStyle} />
            <Skeleton variant="rectangular" sx={skeletonStyle} />
          </div>
        ) : (
          <>
            <div style={skeletonContainer}>
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
            </div>
            <div style={skeletonContainer}>
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
            </div>
            <div style={skeletonContainer}>
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
              <Skeleton variant="rectangular" sx={skeletonStyle} />
            </div>
          </>
        )}
      </Grid>
    );
  }

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <Grid item lg={12} sx={{ width: "90%", margin: "2rem auto" }}>
      <ImageSectionLoader data={data} />
      {isFetchingNextPage ? (
        ""
      ) : (
        <p className="text-white" ref={ref}>
          Fetch
        </p>
      )}
    </Grid>
  );
};
