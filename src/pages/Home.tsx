import { Grid } from "@mui/material";
import Header from "../components/Header";
import LanguageQuery from "../components/LanguageQuery";
import Map from '../components/Map';
import ButtonBar from '../components/ButtonBar';
import VideosModal from "../components/VideosModal";

function Home() {
    return (
        <Grid container spacing={2} sx={{ height: '100vh'}}>
            <Grid item xs={12} sx={{ height: '20%' }}>
              <Header />
            </Grid>
            <Grid container item xs={12} md={5} spacing={1} sx={{height: '60%'}}>
              <Grid item xs={12}>
                <LanguageQuery />
              </Grid>
              <Grid item xs={12}>
                <ButtonBar />
              </Grid>
            </Grid>
            <Grid item xs={12} md={7} sx={{ height: "65%" }}>
              <Map />
              <VideosModal />
            </Grid>
        </Grid>
    );
}

export default Home;