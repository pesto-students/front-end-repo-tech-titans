import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const ProductPage = () => {
  const product_id = useParams();
  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "All Products",
      link: "/products",
    },
    {
      label: "Green Tea",
    },
  ];
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mx: "auto" }}>
      {/* Hide on mobile view */}
      {/* Current Path */}
      <BreadCrumb pathItems={breadcrumbItems} />

      <Grid
        component="section"
        container
        sx={{ mt: 2, border: "1px solid blue" }}
        rowGap={5}
      >
        <Grid item xs={12} md={6} sx={{ border: "1px solid red" }}>
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            // alt={item.title}
            src="https://images.unsplash.com/photo-1597088268939-ca0a66007a4d?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="100%"
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ border: "1px solid orange" }}>
          <ProductDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
