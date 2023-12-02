import { styled } from "@mui/material/styles";
import { Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import ProductControls from "../ProductControls/ProductControls";

const StyledDetailsSection = styled("div")(({ theme }) => ({
  marginLeft: "120px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
    marginTop: "0",
  },
}));

const ProductName = styled(Typography)(() => ({
  fontSize: "3rem",
  fontWeight: 700,
}));

const ProductDescription = styled(Typography)(() => ({
  fontWeight: 500,
}));

const ProductPrice = styled(Typography)(() => ({
  fontWeight: 400,
  fontSize: "1.5rem",
}));

const BuyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.black,
  borderColor: theme.palette.grey["500"],
  textTransform: "none",
  fontWeight: "700",
  "&:hover": {
    color: theme.palette.common.black,
    borderColor: theme.palette.common.black,
  },
}));

const ProductDetails = ({}) => {
  return (
    <StyledDetailsSection className="product__details">
      <ProductName variant="h1" mb={10}>
        Product Name
      </ProductName>
      <ProductDescription variant="" paragraph mb={4}>
        Product Description Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Mollitia doloremque asperiores numquam dolore, cumque quia natus
        expedita? Officia rem consequuntur illo earum facere ea amet id quo,
        inventore doloremque facilis?
      </ProductDescription>
      <ProductPrice variant="div">₹ 800</ProductPrice>
      <Divider style={{ margin: "32px 0px", borderColor: grey["400"] }} />

      {/* Section containing controls for size and quantity selection*/}
      <ProductControls />

      {/* Buy section */}
      <BuyButton variant="outlined" fullWidth size="large">
        Add to Cart
      </BuyButton>
    </StyledDetailsSection>
  );
};

export default ProductDetails;
