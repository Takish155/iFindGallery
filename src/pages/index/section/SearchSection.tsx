import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export const SearchSection = () => {
  return (
    <Grid item lg={12} sx={{ width: "95%" }}>
      <section className="mx-auto">
        <div className="flex">
          <TextField
            sx={{ width: "50%", margin: "0 auto" }}
            label="Search for Images"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton type="submit">
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
