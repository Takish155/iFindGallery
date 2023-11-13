import { Grid } from "@mui/material";
import { HeroSection } from "./section/HeroSection";
import { IndexPhotoSection } from "./section/IndexPhotoSection";

export const IndexPage = () => {
  return (
    <main className="pt-32">
      <Grid container>
        <HeroSection />
        <IndexPhotoSection />
      </Grid>
    </main>
  );
};
