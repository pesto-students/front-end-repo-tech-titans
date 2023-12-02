import { useState } from "react";
import { Container, Divider, CircularProgress } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import useProductList from "@/hooks/products/useProductList";
import useCategoryList from "@/hooks/categories/useCategoryList";
import ErrorContainer from "@/components/common/Error/Error";
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

  const filterProps = {
    categories,
  };

  const sortProps = {
    // sort,
    // setSort,
  };
  console.log({ products, isLoading: isProductsLoading, error: productsError });
  return (
    <Container maxWidth="xl" sx={{ mt: 3, mx: "auto", textAlign: "center" }}>
      {/* Hide on mobile view */}
      {/* Current Path */}
      <BreadCrumb pathItems={breadcrumbItems} />

      {/* Filter and Sort Section */}
      <FilterSortSection
        filterProps={filterProps}
        sortProps={sortProps}
        fetchProducts={fetchProducts}
      />

      <Divider style={{ borderColor: grey["400"] }} />

      {/* Display circular loader while fetching data */}
      {isProductsLoading && (
        <CircularProgress sx={{ color: grey["500"], mt: 2 }} />
      )}

      {/* Display error component if fetching data fails*/}
      {productsError && (
        <ErrorContainer>
          <p style={{ color: red["700"] }}>{productsError}</p>
        </ErrorContainer>
      )}

      {/* Product cards */}
      <ProductSection products={products} />
    </Container>
  );
};

export default ProductGallery;
