const SelectButton = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:bg-purple-200 w-full h-28 border-4 border-purple-900 hover:shadow-xl hover:shadow-violet-500 rounded-full grid place-content-center bg-purple-100 p-4">
      <p className="text-3xl font-medium text-purple-900">{children}</p>
    </div>
  );
};
export default SelectButton;
