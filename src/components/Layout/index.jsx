const Layout = ({ children }) => {
  return (
    <>
      <section className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-400 to-purple-700">
        
        {children}
      </section>
    </>
  );
};
export default Layout;
