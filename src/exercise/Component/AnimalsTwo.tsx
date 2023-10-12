import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { editName } from "../Store/mySlice";
const animalsListTow = ["אריה", "נמר", "ברדלס"];
const AnimalsTwo = () => {
  const dispatch = useAppDispatch();
  const aminalName = useAppSelector((store) => store.name).name;

  return (
    <Box sx={{ margin: "1em", border: "0.5px solid #444444" }}>
      {animalsListTow.map((a) => (
        <Typography
          variant="h5"
          onClick={() => dispatch(editName(a))}
          sx={{
            direction: "rtl",
            border: "0.7px solid red",
            backgroundColor: aminalName === a ? "#f54d4d" : "white",
          }}
        >
          {a}
        </Typography>
      ))}
    </Box>
  );
};
export default AnimalsTwo;
