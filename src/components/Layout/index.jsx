import {
  MusicalNoteIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Layout = ({ children }) => {
  const [showInstruction, setshowInstruction] = useState(true);
  return (
    <>
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-400 to-purple-700">
        <div className="absolute top-6 right-4 flex flex-col gap-6">
          <MusicalNoteIcon className="w-16 h-16 text-purple-800 bg-white rounded-full shadow-purple-800 border-4 border-purple-800 shadow-md" />
          <Cog6ToothIcon className="w-16 h-16 text-purple-800 bg-white rounded-full shadow-purple-800 border-4 border-purple-800 shadow-md" />
          <InformationCircleIcon className="w-16 h-16 text-purple-800 bg-white rounded-full shadow-purple-800 border-4 border-purple-800 shadow-md" />
        </div>
        {children}
      </section>
    </>
  );
};
export default Layout;
