import { Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import Filter from "./components/Filter/Filter";
import Sort from "./components/Sort/Sort";
import ProductSection from "./components/ProductSection/ProductSection";

const ProductGallery = () => {
  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "All Products",
    },
  ];

  const filterSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0px",
  };

  const productList = [1, 2, 3, 4, 5].map((i) => ({
    id: i,
  }));
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mx: "auto" }}>
      {/* Hide on mobile view */}
      {/* Current Path */}
      <BreadCrumb pathItems={breadcrumbItems} />

      {/* Filter and Sort Section */}
      <div className="product-filters" style={filterSectionStyle}>
        <Filter />
        <Sort />
      </div>

      <Divider style={{ borderColor: grey["400"] }} />

      {/* Product cards */}
      <ProductSection products={productList} />
    </Container>
  );
};

export default ProductGallery;
