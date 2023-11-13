import { AppBar, Toolbar, Typography } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <AppBar
        sx={{
          bgcolor: "white",
          color: "#121212",
          display: "flex",
          opacity: 0.98,
        }}
      >
        <Toolbar sx={{ marginLeft: "3%" }}>
          <div className="flex">
            <CollectionsIcon sx={{ fontSize: "2rem", marginRight: "25%" }} />
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              iFindGallery
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
};
