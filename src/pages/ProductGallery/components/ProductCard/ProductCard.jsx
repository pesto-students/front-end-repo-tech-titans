import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const cardStyles = {
  border: "1px solid white",
  borderRadius: "16px",
  "&:hover": {
    borderColor: "gray",
  },
};

const ProductCard = ({ data }) => {
  const { name, price, id: productId } = data;
  return (
    <Card sx={cardStyles} elevation={0}>
      <CardActionArea component={RouterLink} to={`${productId}`}>
        <CardMedia
          component="img"
          image="https://images.unsplash.com/photo-1597088268939-ca0a66007a4d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h6">
            Product Name 👉 {name}
          </Typography>
          <Typography align="center" variant="body1">
            Product Price {price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
