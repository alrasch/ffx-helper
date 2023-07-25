import '../../../index.css'
import data from "../../assets/mixes.json";
import Category from "./Category.tsx";
import {Typography} from "@mui/material";

function MixList() {
  return (
    <>
      <div>
        <Typography variant={"h2"}>Mix List</Typography>
        {data.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </>
  )
}

export default MixList
