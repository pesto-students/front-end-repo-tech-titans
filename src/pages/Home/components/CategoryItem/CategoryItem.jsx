import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

// HOC to create a image with redirecting capabilities
function ImageLinkHOC(WrappedComponent) {
  return function ({ imgUrl, altText, to }) {
    const StyledImage = styled(WrappedComponent)({
      width: "70%",
    });

    return (
      <Link to={to} style={{ textAlign: "center" }}>
        <StyledImage src={imgUrl} alt={altText} />
      </Link>
    );
  };
}

const CategoryItem = ({ name, imgUrl }) => {
  const CategoryGridItem = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: default;
    }
  `;

  const CategoryTag = styled(Typography)`
    position: absolute;
    background-color: white;
    padding: 5px 10px;
    font-size: 1.2rem;
    pointer-events: none;
    color: ${(props) => props.theme.palette.text.primary};
  `;

  // Create a new component using the HOC
  const CategoryImg = ImageLinkHOC((props) => <img {...props} />);

  return (
    <CategoryGridItem
      item
      xs={12}
      sm={4}
      style={{
        height: "100%",
      }}
    >
      <CategoryImg
        imgUrl={imgUrl}
        altText={`${name} Category`}
        to={`/products/${name.toLowerCase()}`}
      />
      <CategoryTag variant="body1">{name}</CategoryTag>
    </CategoryGridItem>
  );
};

export default CategoryItem;
