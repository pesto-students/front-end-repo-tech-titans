import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Sort = () => {
  const [sortValue, setSortValue] = useState("");

  const handleChange = (event) => {
    setSortValue(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 85 }}>
      <FormControl fullWidth size="small">
        <InputLabel htmlFor="Sort">Sort</InputLabel>
        <Select
          value={sortValue}
          label="Sort"
          style={{ backgroundColor: "white" }}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
