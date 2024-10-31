import { Outlet } from "react-router-dom";
const ContainerForm = () => {
  return (
    <form action="input">
      <div className="bg-form">
        <div className="auth-form">
          <Outlet />
        </div>
      </div>
    </form>
  );
};

export default ContainerForm;
