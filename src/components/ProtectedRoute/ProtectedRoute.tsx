import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = Cookies.get("client-token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth");
    }
  }, [token, navigate]);

  return <>{children}</>;
};

export default ProtectedRoute;
