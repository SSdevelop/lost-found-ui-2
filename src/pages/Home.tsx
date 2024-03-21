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
<<<<<<< HEAD
                <Header />
            </Grid>
            <Grid container item xs={12} md={5} spacing={1} sx={{height: '60%'}}>
                <Grid item xs={12}>
                    <LanguageQuery />
                </Grid>
                {/* <Grid item xs={12} sx={{height: '50px'}}>
                <Divider sx={{ width: '85%', margin: 'auto' }}>
                    <Typography variant="overline">
                    <i>OR</i>
                    </Typography>
                </Divider>
                </Grid>
                <Grid item xs={12}>
                <ImageQuery />
                </Grid> */}
                <Grid item xs={12}>
                    <ButtonBar />
                </Grid>
            </Grid>
            <Grid item xs={12} md={7} sx={{ height: "65%", display:'flex', flexDirection: 'column', alignContent: 'center' }}>
                <Map />
                <VideosModal />
=======
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
>>>>>>> test
            </Grid>
        </Grid>
    );
}

export default Home;