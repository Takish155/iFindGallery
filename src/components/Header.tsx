import { AppBar, Toolbar, Typography } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import { NavLink } from "react-router-dom";

const navLink = {
  marginRight: "1rem",
  fontSize: "1rem",
};

export const Header = () => {
  return (
    <header>
      <AppBar sx={{ bgcolor: "white", color: "#121212", display: "flex" }}>
        <Toolbar sx={{ display: "flex" }}>
          <CollectionsIcon sx={{ fontSize: "2rem", marginRight: "1rem" }} />
          <Typography variant="h6" sx={{ marginRight: "1rem" }}>
            iFindGallery
          </Typography>
          <nav>
            <NavLink to="" style={navLink}>
              Home
            </NavLink>
            <NavLink to="search" style={navLink}>
              Search
            </NavLink>
            <NavLink to="feeling-lucky">Random</NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};
