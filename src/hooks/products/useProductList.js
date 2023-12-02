import { useState, useEffect } from "react";
import { getAllProducts } from "@/api/products";

const useProductList = (filterBy, sortBy) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async (filterOptions = null, sortOptions = null) => {
    setLoading(true);
    setError(null);
    setProducts([]);

    try {
      const { data } = await getAllProducts(filterOptions, sortOptions);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products list:", error);
      setError("Error fetching products list. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filterBy, sortBy]);

  return { products, isLoading, error, fetchProducts };
};

export default useProductList;
