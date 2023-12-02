import { memo } from "react";
import {
  Typography,
  Divider,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox as MUICheckbox,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material";

const SectionHeader = ({ children }) => (
  <Typography variant="h6" sx={{ mb: 1 }}>
    {children}
  </Typography>
);

const Checkbox = styled(MUICheckbox)(() => ({
  "&.Mui-checked": {
    color: grey["700"],
  },
}));

const FilterDrawerContent = memo(
  ({
    categories,
    filterOptions,
    handleChange: { handleCheckboxChange, handlePriceRangeChange },
    disableApply,
  }) => {
    const checkError = (type) => {
      const min = parseInt(filterOptions.priceRange.min);
      const max = parseInt(filterOptions.priceRange.max);

      if (min > max) {
        disableApply(true);
      } else {
        disableApply(false);
      }
      return isNaN(type === "min" ? max : min) ? false : min > max;
    };
    return (
      <>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Filter
        </Typography>

        {/* Category filter section */}
        <FormControl sx={{ mb: 2 }} component="fieldset" variant="standard">
          <FormLabel component={SectionHeader}>Categories</FormLabel>
          <FormGroup>
            {categories.map(({ name, id }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filterOptions.category.includes(id)}
                    onChange={(e) => handleCheckboxChange("category", e, id)}
                  />
                }
                label={name}
                key={id}
              />
            ))}
          </FormGroup>
        </FormControl>

        <Divider sx={{ borderColor: grey["400"], mb: 2 }} />

        {/* Price range filter section */}
        <FormGroup sx={{ mb: 3 }} component="fieldset" variant="standard">
          <FormLabel component={SectionHeader}>Price Range</FormLabel>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              placeholder="Min"
              type="number"
              size="small"
              value={filterOptions.priceRange.min}
              error={checkError("min")}
              onChange={(e) => handlePriceRangeChange("min", e.target.value)}
            />
            <span style={{ margin: "0 8px" }}>-</span>
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">₹</InputAdornment>
              }
              inputProps={{ min: filterOptions.priceRange.min }}
              placeholder="Max"
              type="number"
              size="small"
              value={filterOptions.priceRange.max}
              error={checkError("max")}
              onChange={(e) => handlePriceRangeChange("max", e.target.value)}
            />
          </div>
        </FormGroup>

        <Divider sx={{ borderColor: grey["400"], mb: 2 }} />

        {/* Availability filter section */}
        <FormControl sx={{ mb: 2 }} component="fieldset" variant="standard">
          <FormLabel component={SectionHeader}>Availability</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.availability.includes("in_stock")}
                  onChange={(e) => handleCheckboxChange("stock", e, "in_stock")}
                />
              }
              label="In Stock"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filterOptions.availability.includes("out_of_stock")}
                  onChange={(e) =>
                    handleCheckboxChange("stock", e, "out_of_stock")
                  }
                />
              }
              label="Out of Stock"
            />
          </FormGroup>
        </FormControl>
      </>
    );
  }
);

export default FilterDrawerContent;
