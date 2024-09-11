import svg1 from "./../assets/svg/svg1.svg";

export const NoResulte = () => {
  return (
    <div className="text-white text-3xl text-center font-bold grid place-content-center">
      <img src={svg1} alt="no resulte" className="h-[60vh]"/>
      <span>No Resulte!</span>
    </div>
  );
};