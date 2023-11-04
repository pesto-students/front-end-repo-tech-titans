import { styled } from "@mui/material/styles";
import ProductCard from "../ProductCard/ProductCard";

const StyledProductSection = styled("section")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
  gridGap: "40px",
  margin: "16px 0px",
}));

const ProductSection = ({ products }) => {
  return (
    <StyledProductSection>
      {products.map((item, idx) => (
        <ProductCard data={item} key={idx} />
      ))}
    </StyledProductSection>
  );
};

export default ProductSection;
