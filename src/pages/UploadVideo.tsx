import { Grid } from "@mui/material";
import Header from "../components/Header";
import LanguageQuery from "../components/LanguageQuery";
import ButtonBar from '../components/ButtonBar';

function HomeVideo() {
    return (
        <Grid container spacing={2} sx={{ height: '100vh'}}>
            <Grid item xs={12} sx={{ height: '20%' }}>
              <Header />
            </Grid>
            <Grid item xs={3} />
            <Grid container item xs={6} md={5} spacing={1} sx={{height: '60%'}}>
              <Grid item xs={12}>
                <LanguageQuery />
              </Grid>
              <Grid item xs={12}>
                <ButtonBar />
              </Grid>
            </Grid>
        </Grid>
    );
}

export default HomeVideo;