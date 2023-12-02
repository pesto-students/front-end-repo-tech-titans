import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const SizeSelector = () => {
  return (
    <FormControl size="small" sx={{ width: "120px" }}>
      <Select
        defaultValue={"small"}
        displayEmpty
        // value={quantity}
        // onChange={handleQuantityChange}
        inputProps={{
          name: "size",
          id: "size",
        }}
      >
        <MenuItem value={"small"} selected>
          Small
        </MenuItem>
        <MenuItem value={"medium"}>Medium</MenuItem>
        <MenuItem value={"large"}>Large</MenuItem>
        {/* Add more quantity options as needed */}
      </Select>
    </FormControl>
  );
};

export default SizeSelector;
