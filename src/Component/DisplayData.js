import { useSelector } from "react-redux";
import AddField from "../AddField";

export const DisplayData = ({ props }) => {
  const listValue = useSelector((state) => state.listValue.data);
  console.log("listvalue", listValue);
  return (
    <div>
      {listValue.length > 0 ? (
        listValue.map((val, itr) => {
          return (
            <AddField
              editFieldValue="dsdssssdsd"
              editTypeValue="object"
              editRequired={true}
            />
          );
        })
      ) : (
        <p>No data</p>
      )}
    </div>
  );
};
