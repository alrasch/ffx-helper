import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from "react";

export type EffectProps = {
  effect: {
    name: string;
    description: string;
    mixes: { item1: string, item2: string }[];
  };
};

type MixItems = {
  item1: string;
  item2: string;
}

function Effect({effect}: EffectProps) {
  const [hasBeenExpanded, setHasBeenExpanded] = useState<boolean>(false);

  const reduceMixes = (result: MixItems[][], _: MixItems, index: number, array: MixItems[]) => {
    if (index % 2 === 0)
      result.push(array.slice(index, index + 2));
    return result;
  };

  const mapItemPair = (pair: MixItems[], pairIndex: number) => (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: pairIndex % 2 ? '#eee' : '#ddd'
    }}>
      {pair.map((mix) => (
        <div style={{
          display: 'flex',
          width: '45%',
          backgroundColor: pairIndex % 2 ? '#eee' : '#ddd'
        }}>
          <Typography sx={{width: '40%', flexShrink: 0, textAlign: "right", margin: "0 auto"}}>
            {mix.item1}
          </Typography>
          <Typography sx={{flexShrink: 0, margin: "0 auto"}}>+</Typography>
          <Typography sx={{width: '40%', flexShrink: 0, textAlign: "left", margin: "0 auto"}}>
            {mix.item2}
          </Typography>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <Accordion onChange={() => setHasBeenExpanded(true)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
          <Typography sx={{width: '33%', flexShrink: 0, textAlign: "left"}}>{effect.name}</Typography>
          <Typography sx={{color: 'text.secondary', textAlign: "left"}}>{effect.description}</Typography>
        </AccordionSummary>
        {
          hasBeenExpanded &&
            <AccordionDetails>
              {effect.mixes.reduce(reduceMixes, []).map(mapItemPair)}
            </AccordionDetails>
        }
      </Accordion>
    </div>
  );
}

export default Effect;
