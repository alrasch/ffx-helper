import data from "./data.json";
import Area from "./Area";
import Grid from '@mui/material/Unstable_Grid2';
import {styled} from "@mui/material";

const AppContainer = styled(Grid)({
});

const AreaContainer = styled(Grid)({
});

function MonsterTracker() {
  return (
    <div className="App">
      <AppContainer container columns={12}>
        {data.map((area) => (
          <AreaContainer container xs={12}>
            <Area name={area.area} monsters={area.monsters}/>
          </AreaContainer>
        ))}
      </AppContainer>
    </div>
  );
}

export default MonsterTracker;
