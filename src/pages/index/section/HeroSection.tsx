import { Grid, Paper } from "@mui/material";
import { Link } from "react-router-dom";

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
    <Grid lg={12}>
      <section className="flex gap-7 mb-5 justify-center flex-wrap">
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
      </section>
    </Grid>
  );
};
