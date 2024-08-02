const Botton = ({ children }) => {
  return (
    <button className="w-80 text-center text-2xl font-bold uppercase text-violet-950 hover:text-white hover:bg-violet-600 border-solid border-4 border-violet-950 bg-white rounded-full px-4 py-2 m-2 transition-transform  hover:scale-105 hover:shadow-lg hover:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-300 focus:ring-opacity-50">
      {children}
    </button>
  );
};

export default Botton;
// className="w-96 h-32 border-8 border-purple-900 rounded-full grid place-content-center bg-purple-100 p-4"