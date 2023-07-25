import Effect, {EffectProps} from "./Effect.tsx";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type CategoryProps = {
  category: {
    category: string;
    effects: EffectProps['effect'][];
  };
};

function Category({ category }: CategoryProps) {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant={"h5"} sx={{ width: "100%", flexShrink: 0, textAlign: "left"}}>
            {category.category}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {category.effects.map((effect) => (
            <Effect effect={effect} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Category;