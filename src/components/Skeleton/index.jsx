const Skeleton = () => {
  return (
    <div className="w-screen">
      <div className="w-3/4 h-1/2 animate-pulse rounded-3xl border-4 bg-purple-300 border-purple-600 grid place-content-center p-4 m-auto"></div>
      <div className="w-3/4 grid m-auto  my-10 place-items-center grid-cols-2 grid-rows-2 gap-4 p-2">
        <div className="animate-pulse w-full h-28 border-4 border-purple-600 rounded-full bg-purple-300 p-4"></div>
        <div className="animate-pulse w-full h-28 border-4 border-purple-600 rounded-full bg-purple-300 p-4"></div>
        <div className="animate-pulse w-full h-28 border-4 border-purple-600 rounded-full bg-purple-300 p-4"></div>
        <div className="animate-pulse w-full h-28 border-4 border-purple-600 rounded-full bg-purple-300 p-4"></div>
      </div>
    </div>
  );
};

export default Skeleton;
