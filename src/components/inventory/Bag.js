import React from "react";
import { ListItem, List, Slider } from "@material-ui/core";

export default function Bag(props) {
  const weight = props.items.reduce((totalWeight, item) => {
    return totalWeight + item.weight;
  }, 0);

  const itemsList = props.items.map((item, ind) => (
    <ListItem
      key={ind}
      onClick={() => {
        props.removeItem(ind);
      }}
    >
      {item.name}
    </ListItem>
  ));

  return (
    <div>
      <Slider disabled={true} max={15} value={weight} />
      <div>Total Weight: {weight.toFixed(2)} nts</div>
      <List>{itemsList}</List>
    </div>
  );
}
