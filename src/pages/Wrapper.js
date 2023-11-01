import { Outlet } from "react-router-dom";
import { DefaultHeader } from "components";

const Wrapper = () => {
  return (
    <>
      <DefaultHeader />
      <Outlet />
    </>
  );
};

export default Wrapper;
