// import './App.css'
import { Divider, Grid, Typography } from "@mui/material";
import Header from "./components/Header";
import LanguageQuery from "./components/LanguageQuery";
import ImageQuery from "./components/ImageQuery";
import Map from './components/Map';
import ButtonBar from './components/ButtonBar';
import VideosModal from "./components/VideosModal";

function App() {
  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ marginTop: '100px' }}>
        <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center' }}>
          <LanguageQuery />
          <Divider sx={{ width: '85%' }}>
            <Typography variant="overline">
              <i>OR</i>
            </Typography>
          </Divider>
          <ImageQuery />
          <ButtonBar />
        </Grid>
        <Grid item xs={12} md={6} sx={{ height: '55vh', display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <Map />
          <VideosModal />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
