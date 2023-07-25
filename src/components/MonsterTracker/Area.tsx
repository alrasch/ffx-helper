import Grid from '@mui/material/Unstable_Grid2';
import Monster from "./Monster";

type AreaProps = {
  name: string,
  monsters: Array<string>
}

function Area(props: AreaProps) {
  return (
    <Grid container xs={12} columns={12}>
      <Grid xs={1}>
        {props.name}
      </Grid>
      <Grid container xs={11}>
        {
          props.monsters.map((monster) => (
            <Monster area={props.name} name={monster}/>
          ))
        }
      </Grid>
    </Grid>
  );
}

export default Area;
