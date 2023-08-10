import { Box, Card, Typography, CardContent } from "@mui/material";
import ImageInput from "./ImageInput";

const ImageQuery = () => {
  return (
    <Box sx={{ minWidth: "400px", width:'95%', margin: "10px" }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "10px", backgroundColor: "#f7f8f8" }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            Image Query
          </Typography>
        </CardContent>
        <CardContent>
          <ImageInput />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ImageQuery;
