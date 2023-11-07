import { ButtonGroup, IconButton, Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Button = ({ children }) => (
  <IconButton disableRipple sx={{ "&:focus": { outline: "none" } }}>
    {children}
  </IconButton>
);

const QuantitySelector = () => {
  return (
    <ButtonGroup
      disableElevation
      variant=""
      sx={{
        alignItems: "center",
        border: "1px solid lightgray",
        maxWidth: "120px",
      }}
    >
      <Button edge="start">
        <RemoveIcon />
      </Button>
      <Input
        disableUnderline
        defaultValue="2"
        inputProps={{ style: { textAlign: "center" } }}
      />
      <Button>
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
};

export default QuantitySelector;
