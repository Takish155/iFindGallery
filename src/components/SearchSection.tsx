import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router";

export const SearchSection = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <Grid item lg={12} sx={{ width: "95%", marginBottom: "1rem" }}>
      <section>
        <div className="flex">
          <TextField
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            sx={{ width: "50%", margin: "0 auto", minWidth: "340px" }}
            label="Search for Images"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => navigate(`/search?query=${search}`)}
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </section>
    </Grid>
  );
};
