import AddFrom from "./AddFrom";
import ButtonsContainer from "./ButtonsContainer";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-4 sticky top-0 z-10">
        <AddFrom />
        <ButtonsContainer />
      </div>
    </>
  );
};

export default Sidebar;
