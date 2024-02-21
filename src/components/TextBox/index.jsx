const TextBox = ({ children }) => {
  return (
    <div className="w-3/4 h-1/2 rounded-3xl border-4 border-purple-900 grid place-content-center bg-purple-100 p-4 m-auto">
      <p className="text-3xl font-medium text-purple-900 text-center">{children}</p>
    </div>
  );
};
export default TextBox;
