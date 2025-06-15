import { useDispatch } from "react-redux";
import authService from "../../services/auth.js";
import { logout } from "../../features/authSlice.js";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
      Logout
    </button>
  );
}

export default LogoutBtn;
