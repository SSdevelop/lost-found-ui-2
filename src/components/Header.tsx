import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CPIILogo from '../assets/cpii_logo.png';
import CUHKLogo from '../assets/cuhk_logo.png';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ padding: "0.75em", backgroundColor: '#31363f' }}>
        <Toolbar>
          <img src={CPIILogo} alt="CPII Logo" style={{ width: '50px', height: '50px' }} />
          <img src={CUHKLogo} alt="CUHK Logo" style={{ width: '50px', height: '50px' }} />
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Flashlight: AI Search on Video
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
