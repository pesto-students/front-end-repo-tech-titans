import { useState } from "react";
import {
  Drawer,
  Box,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { grey } from "@mui/material/colors";
import { INITIAL_FILTER_CONFIG } from "@/constants/initialConfig";
import FilterDrawerContent from "../FilterDrawerContent/FilterDrawerContent";
import SortDrawerContent from "../SortDrawerContent/SortDrawerContent";

const ButtonGroup = styled("div")(({ theme }) => ({
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  "& .Mui-disabled": {
    backgroundColor: `${grey["700"]} !important`,
    color: `${theme.palette.common.white} !important`,
  },
}));

const SelectDropdown = ({ handleClick, fieldName }) => {
  return (
    <Box sx={{ minWidth: 85 }}>
      <FormControl fullWidth size="small">
        <InputLabel htmlFor={fieldName}>{fieldName}</InputLabel>
        <Select
          label={fieldName}
          value=""
          style={{ backgroundColor: "white" }}
          inputProps={{ readOnly: true, style: { cursor: "pointer" } }}
          onClick={handleClick}
        ></Select>
      </FormControl>
    </Box>
  );
};

const Filter = ({ handleClick }) => (
  <SelectDropdown handleClick={handleClick} fieldName="Filter" />
);

const Sort = ({ handleClick }) => (
  <SelectDropdown handleClick={handleClick} fieldName="Sort" />
);

const FilterSortSection = ({ categories, fetchProducts }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openedByFilter, setOpenedByFilter] = useState(false);
  const [filterConfig, setFilterConfig] = useState(INITIAL_FILTER_CONFIG);
  const [sortConfig, setSortConfig] = useState(INITIAL_FILTER_CONFIG);

  const filterSectionStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0px",
  };

  const handleCheckboxChange = (filterType, event, filterValue) => {
    const filterKey = filterType === "category" ? "category" : "availability";
    const oldFilterConfig = filterConfig[filterKey];
    const newFilterConfig = event.target.checked
      ? [...oldFilterConfig, filterValue]
      : oldFilterConfig.filter((cat) => cat !== filterValue);

    setFilterConfig((state) => ({
      ...state,
      [filterKey]: newFilterConfig,
    }));
  };

  const handlePriceRangeChange = (range, rangeValue) => {
    const oldRangeConfig = filterConfig.priceRange;
    const newRangeConfig = {
      ...oldRangeConfig,
      [range]: isNaN(parseFloat(rangeValue)) ? "" : parseFloat(rangeValue),
    };

    setFilterConfig((state) => ({
      ...state,
      priceRange: newRangeConfig,
    }));
  };

  const handleSortConfigChange = (e, value) => {
    setSortConfig(value);
  };

  const checkError = (type) => {
    const min = parseInt(filterConfig.priceRange.min);
    const max = parseInt(filterConfig.priceRange.max);

    return isNaN(type === "min" ? max : min) ? false : min > max;
  };

  const toggleDrawer = (filterTriggered) => {
    // Helps select filter or sort drawer content
    // only at the time of drawer opening
    if (!drawerOpen) setOpenedByFilter(filterTriggered);
    setDrawerOpen(!drawerOpen);
  };

  const handleApplyFilterClick = () => {
    setDrawerOpen(false);
    fetchProducts(filterConfig, sortConfig);
  };

  const resetFilterOptions = () => setFilterConfig(INITIAL_FILTER_CONFIG);

  return (
    <div className="product-filters" style={filterSectionStyle}>
      {/* Filter Select Dropdown */}
      <Filter handleClick={() => toggleDrawer(true)} />

      {/* Sort Select Dropdown */}
      <Sort handleClick={() => toggleDrawer(false)} />

      {/* Side Drawer to show filter and sort content */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            maxWidth: { xs: "100%" },
            // width: { xs: "100%" },

            minWidth: { md: 500 },
            p: { md: 6, xs: 3 },
            py: { xs: 6 },
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <IconButton
            sx={{ position: "absolute", right: 0, mx: { md: 6, xs: 3 } }}
            onClick={toggleDrawer}
          >
            <CloseIcon />
          </IconButton>

          {openedByFilter ? (
            <FilterDrawerContent
              categories={categories}
              filterConfig={filterConfig}
              handleChange={{ handlePriceRangeChange, handleCheckboxChange }}
              checkError={checkError}
            />
          ) : (
            <SortDrawerContent
              sortConfig={sortConfig}
              handleChange={handleSortConfigChange}
            />
          )}

          <ButtonGroup>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: "black",
                width: "49%",
                height: 50,
              }}
              disabled={checkError()}
              onClick={handleApplyFilterClick}
              fullWidth
            >
              Apply Filters
            </Button>
            <Button
              variant="outlined"
              size="large"
              style={{ borderColor: grey["800"], color: "black", width: "49%" }}
              onClick={resetFilterOptions}
              fullWidth
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
