import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_TEXT_FIELD } from "./Action/listAction";
import AddField from "./AddField";
import { DisplayData } from "./Component/DisplayData";
import "./styles.css";

export default function App() {
  const dispatch = useDispatch();
  const openTextField = useSelector((state) => state.openTextField);
  console.log(openTextField);
  const handleAdd = () => {
    dispatch({
      type: OPEN_TEXT_FIELD,
      data: true
    });
  };
  return (
    <div className="App">
      <Button
        variant="outlined"
        children="Add"
        onClick={() => handleAdd()}
        style={{ margin: "10px" }}
      />
      {openTextField.open && <AddField />}
      <DisplayData />
    </div>
  );
}
