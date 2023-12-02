import { useState } from "react";
import { Drawer, Box, Button, IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import Filter from "../Filter/Filter";
import Sort from "../Sort/Sort";
import FilterDrawerContent from "../FilterDrawerContent/FilterDrawerContent";
import { INITIAL_FILTER_CONFIG } from "@/constants/initialConfig";

const ButtonGroup = styled("div")(({ theme }) => ({
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  "& .Mui-disabled": {
    backgroundColor: `${grey["700"]} !important`,
    color: `${theme.palette.common.white} !important`,
  },
}));

const FilterSortSection = ({
  filterProps: { categories },
  sortProps: { sort, setSort },
  fetchProducts,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [applyDisabled, setApplyDisabled] = useState(false);

  const [filterOptions, setFilterOptions] = useState(INITIAL_FILTER_CONFIG);

  const filterSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0px",
  };

  const handleCheckboxChange = (filterType, event, filterValue) => {
    const filterKey = filterType === "category" ? "category" : "availability";
    const oldFilterConfig = filterOptions[filterKey];
    const newFilterConfig = event.target.checked
      ? [...oldFilterConfig, filterValue]
      : oldFilterConfig.filter((cat) => cat !== filterValue);

    setFilterOptions((state) => ({
      ...state,
      [filterKey]: newFilterConfig,
    }));
  };

  const handlePriceRangeChange = (range, rangeValue) => {
    const oldRangeConfig = filterOptions.priceRange;
    const newRangeConfig = {
      ...oldRangeConfig,
      [range]: isNaN(parseFloat(rangeValue)) ? "" : parseFloat(rangeValue),
    };

    setFilterOptions((state) => ({
      ...state,
      priceRange: newRangeConfig,
    }));
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const handleApplyFilterClick = () => {
    toggleDrawer();
    fetchProducts(filterOptions);
  };
  const resetFilterOptions = () => setFilterOptions(INITIAL_FILTER_CONFIG);

  return (
    <div className="product-filters" style={filterSectionStyle}>
      {/* Filter Select Dropdown */}
      <Filter handleClick={toggleDrawer} />

      {/* Sort Select Dropdown */}
      <Sort />

      {/* Side Drawer to show filter and sort content */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            maxWidth: { md: 550, xs: "100%" },
            p: { md: 6, xs: 3 },
            py: { xs: 6 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            aria-label="delete"
            sx={{ position: "absolute", right: 0, mx: { md: 6, xs: 3 } }}
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>

          <FilterDrawerContent
            categories={categories}
            filterOptions={filterOptions}
            handleChange={{ handlePriceRangeChange, handleCheckboxChange }}
            disableApply={setApplyDisabled}
          />

          {/* <SortDrawerContent
            filterOptions={filterOptions}
            handleChange={{ handlePriceRangeChange, handleCheckboxChange }}
          /> */}

          <ButtonGroup>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "black",
                width: "49%",
                height: 50,
              }}
              disabled={applyDisabled}
              onClick={handleApplyFilterClick}
            >
              Apply Filters
            </Button>
            <Button
              variant="outlined"
              size="large"
              style={{ borderColor: grey["800"], color: "black", width: "49%" }}
              onClick={resetFilterOptions}
            >
              Clear All
            </Button>
          </ButtonGroup>
        </Box>
      </Drawer>
    </div>
  );
};

export default FilterSortSection;
