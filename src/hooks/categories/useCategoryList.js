import { useState, useEffect } from "react";
import { getAllCategories } from "@/api/categories";

const useCategoryList = () => {
  const [categories, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await getAllCategories();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching categories list:", error);
        setError("Error fetching categories list. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, isLoading, error };
};

export default useCategoryList;
