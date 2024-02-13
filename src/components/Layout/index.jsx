import {
  Cog6ToothIcon,
  InformationCircleIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/solid";

const Layout = ({ children }) => {
  return (
    <>
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-400 to-purple-700">
        <div className="grid gap-4 absolute right-6 bottom-6">
          <Cog6ToothIcon className="w-16 h-16 text-white shadow shadow-violet-800 rounded-full bg-purple-800 cursor-pointer" />
          <InformationCircleIcon className="w-16 h-16 text-white shadow shadow-violet-800 rounded-full bg-purple-800 cursor-pointer" />
        </div>
        {children}
      </section>
    </>
  );
};
export default Layout;
