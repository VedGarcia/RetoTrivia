import { Children } from "react";

const Layout = ({ Children }) => {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-400 to-purple-700">
        {Children}
      </div>
    </>
  );
};
export default Layout;
