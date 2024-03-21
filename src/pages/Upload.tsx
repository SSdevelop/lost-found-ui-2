import { Grid } from "@mui/material";
import Header from "../components/Header";
import ButtonBar from '../components/ButtonBar';
// import ImageInput from "../components/ImageInput";
import ImageQuery from "../components/ImageQuery";


function Upload() {
    return(
        <Grid container spacing={2} sx={{ height: '100vh'}}>
            <Grid item xs={12} sx={{ height: '20%' }}>
                <Header />
            </Grid>
            <Grid item xs={3} />
            <Grid container item xs={6} spacing={1} sx={{height: '60%'}}>
                <Grid item xs={12}>
                    <ImageQuery />
                </Grid>
                <Grid item xs={12}>
                    <ButtonBar />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Upload;