import { styled } from "@mui/material/styles";
import ProductCard from "../ProductCard/ProductCard";

const StyledProdcutSection = styled("section")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gridGap: "40px",
  margin: "16px 0px",
}));

const ProductSection = ({ products }) => {
  return (
    <StyledProdcutSection>
      {products.map((idx, item) => (
        <ProductCard data={item} key={idx} />
      ))}
    </StyledProdcutSection>
  );
};

export default ProductSection;
