import { useState } from "react";
import { LevelContext } from "../../context";
import SelectButton from "../SelectButton";


const SelectBox = ({ items, correctResponse }) => {
  return (
    <div className="w-3/4 grid m-auto  my-10 place-items-center grid-cols-2 grid-rows-2 gap-4 p-2">
      {items.map(({ name, ...rest }) => (
        <SelectButton key={rest.id} idResponse={rest.id} correctResponse={ correctResponse }>
          {name}
        </SelectButton>
      ))}
    </div>
  );
};
export default SelectBox;
