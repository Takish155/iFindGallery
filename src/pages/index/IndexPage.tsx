import { Grid } from "@mui/material";
import React from "react";
import { HeroSection } from "./section/HeroSection";
import { SearchSection } from "./section/SearchSection";

export const IndexPage = () => {
  return (
    <main className=" pt-32">
      <Grid container>
        <HeroSection />
        <SearchSection />
      </Grid>
    </main>
  );
};
