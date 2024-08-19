import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CPIILogo from '../assets/cpii_logo2.png';
import CUHKLogo from '../assets/cuhk_logo.png';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ padding: "0.75em", backgroundColor: '#DFF0D8' }}>
        <Toolbar>
          <img src={CPIILogo} alt="CPII Logo" style={{ marginRight: '25px' }} />
          <img src={CUHKLogo} alt="CUHK Logo" style={{ width: '50px', height: '50px' }} />
          <Typography variant="h3" component="div" sx={{ flexGrow: 1, textAlign: 'center', transform: 'translateX(-20%)', color:'black' }}>
            Flashlight: AI Search on Video
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
