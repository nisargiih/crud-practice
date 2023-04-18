import {
  Button,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { OPEN_TEXT_FIELD, START_ADD_LIST } from "./Action/listAction";

export default function AddField({
  editFieldValue,
  editTypeValue,
  editRequired
}) {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState(editFieldValue);
  const [typeValue, setTypeValue] = useState(editTypeValue);
  const [required, setRequired] = useState(editRequired);
  const [error, setError] = useState(false);
  const type = ["string", "intiger", "object", "boolean"];

  const handleSubmit = () => {
    if (textValue) {
      dispatch({
        type: START_ADD_LIST,
        data: {
          fieldName: textValue,
          fieldType: typeValue,
          required: required
        }
      });
      dispatch({ type: OPEN_TEXT_FIELD, data: false });
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (textValue) {
      setError(false);
    }
  }, [textValue]);

  return (
    <div>
      <TextField
        value={textValue}
        size="small"
        onChange={(e) => setTextValue(e.target.value)}
      />
      <Select
        size="small"
        value={typeValue}
        onChange={(e) => setTypeValue(e.target.value)}
      >
        {type.map((val, index) => {
          return <MenuItem value={val}>{val}</MenuItem>;
        })}
      </Select>
      <Switch onClick={(e) => setRequired(e.target.checked)} />
      {required ? "required" : "not required"}
      <Button variant="outlined" onClick={() => handleSubmit()}>
        Add
      </Button>
      {error && <Typography color="red">Please enter field name</Typography>}
    </div>
  );
}
