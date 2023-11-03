import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadCrumb = ({ pathItems }) => {
  const currentPage = pathItems.at(-1);
  return (
    <Breadcrumbs>
      {pathItems.slice(0, -1).map(({ link, label }, idx) => {
        return (
          <Link
            variant="subtitle2"
            underline="hover"
            color="inherit"
            href={link}
            key={idx}
          >
            {label}
          </Link>
        );
      })}
      <Typography variant="subtitle2" color="text.primary">
        {currentPage.label}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCrumb;
