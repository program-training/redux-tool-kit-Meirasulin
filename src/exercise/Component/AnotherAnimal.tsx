import { Box, TextField } from "@mui/material";
import { useAppDispatch } from "../Store/hooks";
import { editName } from "../Store/mySlice";

const AnotherAnimal = () => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <TextField
        dir="rtl"
        label="חיה אחרת"
        onChange={(e) => dispatch(editName(e.target.value))}
      />
    </Box>
  );
};
export default AnotherAnimal;
