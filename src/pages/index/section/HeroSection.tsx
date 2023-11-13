import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchSection } from "../../../components/SearchSection";

const paperStyle = {
  width: "45%",
};

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
      {/* <section className="flex gap-7 mb-5 justify-center flex-wrap">
        <Paper sx={paperStyle}>
          <h2 className="text-5xl font-bold my-3 ml-3">iGalleryFinder</h2>
          <p className="text-xl ml-4">
            Powered by{" "}
            <a
              href="https://unsplash.com/"
              className="underline"
              target="_blank
              "
            >
              Unplash's API
            </a>
          </p>
          <p className="text-xl ml-4 mb-5">Powered by creators everywhere.</p>
        </Paper>
        <Paper sx={paperStyle}>
          <h2 className="font-bold mt-5 ml-5">Trending</h2>
          <div className="flex flex-wrap gap-4 mx-auto my-5 w-11/12">
            <div>
              <Link to="/search?query=Bridges" style={link}>
                Bridges
              </Link>
            </div>
            <div>
              <Link to="/search?query=Gaming" style={link}>
                Gaming
              </Link>
            </div>
            <div>
              <Link to="/search?query=Cheers" style={link}>
                Cheers
              </Link>
            </div>
            <div>
              <Link to="/search?query=Christmast-Decoration" style={link}>
                Christmast Decoration
              </Link>
            </div>
            <div>
              <Link to="/search?query=Party" style={link}>
                Party
              </Link>
            </div>
            <div>
              <Link to="/search?query=New-Year" style={link}>
                New Year
              </Link>
            </div>
            <div>
              <Link to="/search?query=Japan" style={link}>
                Japan
              </Link>
            </div>
            <div>
              <Link to="/search?query=Food" style={link}>
                Food
              </Link>
            </div>
          </div>
        </Paper>
      </section> */}
    </Grid>
  );
};
