import { useState, useEffect } from "react";
import { getAllProducts } from "@/api/products";

const useProductList = (filterBy, sortBy) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products list:", error);
        setError("Error fetching products list. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filterBy, sortBy]);

  return { products, isLoading, error };
};

export default useProductList;
