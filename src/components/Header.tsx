import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: "0.75em" }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Lost and Found
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
