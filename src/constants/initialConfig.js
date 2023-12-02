export const INITIAL_FILTER_CONFIG = {
  category: [],
  priceRange: { min: "", max: "" },
  availability: [],
};

export const PRODUCT_SORT_OPTIONS = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name: A to Z", value: "name_asc" },
  { label: "Name: Z to A", value: "name_desc" },
];
