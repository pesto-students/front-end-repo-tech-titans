import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = ({ handleClick }) => {
  return (
    <Box sx={{ minWidth: 85 }}>
      <FormControl fullWidth size="small">
        <InputLabel htmlFor="Filter">Filter</InputLabel>
        <Select
          label="Filter"
          value=""
          style={{ backgroundColor: "white" }}
          inputProps={{ readOnly: true, style: { cursor: "pointer" } }}
          onClick={handleClick}
        ></Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
