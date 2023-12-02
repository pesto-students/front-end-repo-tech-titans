import { memo } from "react";
import {
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio as MUIRadio,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material";
import { PRODUCT_SORT_OPTIONS } from "@/constants/initialConfig";

const Radio = styled(MUIRadio)(() => ({
  "&.Mui-checked": {
    color: grey["700"],
  },
}));

const SortDrawerContent = ({ sortConfig, handleChange }) => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Sort
      </Typography>

      {/* Radio button section */}
      <FormControl sx={{ mb: 2 }} component="fieldset" variant="standard">
        <RadioGroup value={sortConfig} onChange={handleChange}>
          {PRODUCT_SORT_OPTIONS?.map(({ label, value }) => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default memo(SortDrawerContent);
