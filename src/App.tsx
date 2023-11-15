// import './App.css'
import { Box, Divider, Grid, Typography } from "@mui/material";
import Header from "./components/Header";
import LanguageQuery from "./components/LanguageQuery";
import ImageQuery from "./components/ImageQuery";
import Map from './components/Map';
import ButtonBar from './components/ButtonBar';
// import VideosModal from "./components/VideosModal";

function App() {
  return (
    
      <Grid container spacing={2} sx={{ height: '100vh'}}>
        <Grid item xs={12} sx={{ height: '20%' }}>
          <Header />
        </Grid>
        <Grid container item xs={12} md={5} spacing={1} sx={{height: '80%'}}>
          <Grid item xs={12}>
            <LanguageQuery />
          </Grid>
          <Grid item xs={12} sx={{height: '50px'}}>
            <Divider sx={{ width: '85%', margin: 'auto' }}>
              <Typography variant="overline">
                <i>OR</i>
              </Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <ImageQuery />
          </Grid>
          <Grid item xs={12}>
            <ButtonBar />
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Map />
          {/* <VideosModal /> */}
        </Grid>
      </Grid>
    // <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} sx={{ height: '100vh' }}>
    //   <Box gridColumn="span 12" sx={{height: '10%'}}>
    //     <Header />
    //   </Box>
    //   <Box gridColumn="span 4" sx={{height: '80%', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
    //     <LanguageQuery />
    //       <Divider sx={{ width: '85%' }}>
    //         <Typography variant="overline">
    //           <i>OR</i>
    //         </Typography>
    //     </Divider>
    //     <ImageQuery />
    //     <ButtonBar />
    //   </Box>
    //   <Box gridColumn="span 8">
    //     <Map />
    //   </Box>
    // </Box>
  );
}

export default App;
