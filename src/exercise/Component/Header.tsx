import { Box } from "@mui/material";
import { useAppSelector } from "../Store/hooks";
const Header = () => {
  const aminalName = useAppSelector((store) => store.name).name;

  return (
    <Box
      sx={{
        direction: "rtl",
        width: "300px",
        height: "20px",
        bgcolor: "#f54d4d",
      }}
    >
      החיה שנבחרה: {aminalName}{" "}
    </Box>
  );
};
export default Header;
