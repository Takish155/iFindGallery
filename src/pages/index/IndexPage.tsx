import { Grid } from "@mui/material";
import { HeroSection } from "./section/HeroSection";
import { IndexPhotoSection } from "./section/IndexPhotoSection";
import { useEffect } from "react";

export const IndexPage = () => {
  useEffect(() => {
    document.title = "Home | iFindGallery";
  });
  return (
    <main className="pt-32">
      <Grid container>
        <HeroSection />
        <IndexPhotoSection />
      </Grid>
    </main>
  );
};
