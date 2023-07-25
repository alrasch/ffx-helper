import {useState} from 'react';
import {IconButton, styled} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Grid from '@mui/material/Unstable_Grid2';

interface MonsterProps {
  area: string,
  name: string,
}

const MonsterContainer = styled(Grid)({
  border: "2px solid #888888",
})

const Counter = styled(Grid)({
  fontSize: "2rem"
})

const ButtonContainer = styled(Grid)({
  padding: "2px"
})

function Monster(props: MonsterProps) {
  const {name} = props;
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => {
      if (prevCount >= 10) {
        return 10;
      } else {
        return prevCount + 1;
      }
    });
  }

  const handleDecrement = () => {
    setCount(prevCount => {
      if (prevCount <= 0) {
        return 0;
      } else {
        return prevCount - 1;
      }
    });
  }

  return (
    <MonsterContainer container xs={2} lg={2} columns={12}>
      <Grid xs={12}>{name}</Grid>
      <Grid container xs={12}>
        <ButtonContainer xs={4}>
          <IconButton color={"secondary"} size={"small"} onClick={handleDecrement}>
            <RemoveIcon fontSize={"large"}/>
          </IconButton>
        </ButtonContainer>
        <Counter xs={4}>{count}</Counter>
        <ButtonContainer xs={4}>
          <IconButton color={"success"} size={"small"} onClick={handleIncrement}>
            <AddIcon fontSize={"large"} />
          </IconButton>
        </ButtonContainer>
      </Grid>
    </MonsterContainer>
  );
}

export default Monster;
