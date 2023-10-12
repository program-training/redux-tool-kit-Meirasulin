import { Box } from "@mui/material";
import AnimalsOne from "./AnimalsOne";
import AnimalsTwo from "./AnimalsTwo";
import Header from "./Header";
import AnotherAnimal from "./AnotherAnimal";

const Main = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "#737373",
          margin: "2em",
        }}
      >
        <AnimalsOne />
        <AnimalsTwo />
      </Box>
      <AnotherAnimal />
    </Box>
  );
};
export default Main;
