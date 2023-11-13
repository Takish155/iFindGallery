import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchSection } from "../../../components/SearchSection";

const link = {
  fontSize: "1.2rem",
  padding: "0.5rem",
  border: "1px solid #121212",
  borderRadius: "10px",
  marginRight: "0.5rem",
};

export const HeroSection = () => {
  return (
    <Grid item lg={12}>
      <section className="w-5/6 mx-auto mb-20">
        <h2 className="font-extrabold text-center text-6xl mb-7">
          The Gallery for fiding Cool Pictures
        </h2>
        <p className="text-2xl text-center mb-10 w-5/6 mx-auto">
          Explore stunning images that resonate with your style, available for
          download in glorious 4K resolution. Unleash your creativity and find
          not just captivating visuals but also talented individuals ready to
          bring your projects to life!
        </p>
        <SearchSection />
        <h4 className="mb-5 text-lg text-center mt-10">Popular keywords</h4>
        <div className="flex flex-wrap gap-4 mx-auto mb-7 w-11/12 justify-center">
          <div className="mb-3">
            <Link to="/search?query=Bridges" style={link}>
              Bridges
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=Gaming" style={link}>
              Gaming
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=Cheers" style={link}>
              Cheers
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=Christmast-Decoration" style={link}>
              Christmast Decoration
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=Party" style={link}>
              Party
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=New-Year" style={link}>
              New Year
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=Japan" style={link}>
              Japan
            </Link>
          </div>
          <div className="mb-3">
            <Link to="/search?query=Food" style={link}>
              Food
            </Link>
          </div>
        </div>
      </section>
    </Grid>
  );
};
