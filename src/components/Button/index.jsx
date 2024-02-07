const Botton = ({ children }) => {
  return (
    <button className="w-80 content-center text-2xl font-bold uppercase text-violet-950 hover:text-white hover:bg-violet-500 border-solid border-4 bg-white rounded-full px-4 py-1 m-2">
      {children}
    </button>
  );
};

export default Botton;
// className="w-96 h-32 border-8 border-purple-900 rounded-full grid place-content-center bg-purple-100 p-4"