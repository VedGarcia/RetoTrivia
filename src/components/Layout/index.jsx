import { useState } from "react";
import {
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import Information from "../Information/index";
import Configuration from "../Config/index";

const Layout = ({ children }) => {
  const [showInformation, setShowInformation] = useState(false);
  const [showConfiguration, setShowConfiguration] = useState(false);

  return (
    <>
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-400 to-purple-700">
        <Information state={showInformation} setState={setShowInformation} />
        <Configuration state={showConfiguration} setState={setShowConfiguration} />
        <div className="absolute top-6 right-4 flex flex-col gap-6">
          <Cog6ToothIcon onClick = {() => setShowConfiguration(!showConfiguration)} className="w-16 h-16 text-purple-800 bg-white rounded-full shadow-purple-800 border-4 border-purple-800 shadow-md cursor-pointer hover:bg-indigo-200" />
          <InformationCircleIcon onClick={() => setShowInformation(!showInformation)} className="w-16 h-16 text-purple-800 bg-white rounded-full shadzow-purple-800 border-4 border-purple-800 shadow-md cursor-pointer hover:bg-indigo-200" />
        </div>
        {children}
      </section>
    </>
  );
};
export default Layout;