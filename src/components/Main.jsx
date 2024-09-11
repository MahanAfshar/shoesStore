export const Main = ({ children, backDrop }) => {
  return (
    <main className="pt-28 sm:px-4 md:px-0 bg-gray-900 min-h-screen">
      {children}
      {backDrop && (
        <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-lg bg-black/40 md:hidden"></div>
      )}
    </main>
  );
};