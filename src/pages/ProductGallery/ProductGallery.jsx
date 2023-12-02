import { Container, Divider, CircularProgress } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import useProductList from "@/hooks/products/useProductList";
import useCategoryList from "@/hooks/categories/useCategoryList";
import Message from "@/components/common/Message/Message";
import FilterSortSection from "./components/FilterSortSection/FilterSortSection";
import ProductSection from "./components/ProductSection/ProductSection";

const ProductGallery = () => {
  const {
    products,
    isLoading: isProductsLoading,
    error: productsError,
    fetchProducts,
  } = useProductList();
  const { categories } = useCategoryList();

  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "All Products",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ mt: 3, mx: "auto", textAlign: "center" }}>
      {/* Hide on mobile view */}
      {/* Current Path */}
      <BreadCrumb pathItems={breadcrumbItems} />

      {/* Filter and Sort Section */}
      <FilterSortSection
        categories={categories}
        fetchProducts={fetchProducts}
      />

      <Divider style={{ borderColor: grey["400"] }} />

      {/* Display circular loader while fetching data */}
      {isProductsLoading && (
        <CircularProgress sx={{ color: grey["500"], mt: 2 }} />
      )}

      {/* Display error component if fetching data fails*/}
      {!isProductsLoading && productsError && (
        <Message error>
          <p>{productsError}</p>
        </Message>
      )}

      {/* Display message if no data matches filters*/}
      {!isProductsLoading && !productsError && products?.length === 0 && (
        <Message>
          <p>No Data Available for Selected Filters</p>
        </Message>
      )}

      {/* Product cards */}
      <ProductSection products={products} />
    </Container>
  );
};

export default ProductGallery;
