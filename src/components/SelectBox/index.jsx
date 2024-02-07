import SelectButton from "../SelectButton";

const SelectBox = ({ items, onClick }) => {
  return (
    <div className="w-3/4 grid m-auto border place-items-center grid-cols-2 grid-rows-2 gap-4 p-2">
      {items.map(({ name }) => (
        <SelectButton onClick={onClick}>{name}</SelectButton>
      ))}
    </div>
  );
};
export default SelectBox;
