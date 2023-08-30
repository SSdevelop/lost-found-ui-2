import {
  Box,
  Card,
  Typography,
  CardContent,
  Badge,
  IconButton,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ImageInput from "./ImageInput";

const ImageQuery = () => {
  return (
    <Box sx={{ minWidth: "400px", width: "95%", margin: "10px" }}>
      <Card
        variant="outlined"
        sx={{ borderRadius: "10px", backgroundColor: "#f7f8f8" }}
      >
        <CardContent sx={{ textAlign: "center", position: "relative" }}>
          <Typography gutterBottom variant="h5" component="div">
            Image Query
          </Typography>
          <IconButton
            aria-label="numImages"
            sx={{
              position: "absolute",
              right: "5%",
              top: "20%",
              // display: "none",
            }}
          >
            <Badge
              badgeContent={1}
              color="primary"
              variant="dot"
              overlap="circular"
            >
              <VisibilityIcon />
            </Badge>
          </IconButton>
        </CardContent>
        <CardContent sx={{ padding: 0 }}>
          <ImageInput />
        </CardContent>
      </Card>
    </Box>
  );
};

export default ImageQuery;
