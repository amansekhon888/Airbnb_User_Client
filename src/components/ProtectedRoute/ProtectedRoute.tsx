import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation, useVerifyMutation } from "../../redux/api/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [verifyToken, { error, isLoading }] = useVerifyMutation();
  const [LogoutMutation,] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    verifyToken({});
  }, [verifyToken]);

  useEffect(() => {
    if (error) {
      LogoutMutation({}).unwrap();
      localStorage.removeItem("token");
      navigate("/auth", { state: { openModal: true } });
    }
  }, [error, navigate]);

  if (isLoading) return <p>Verifying...</p>;

  return <>{children}</>;
};

export default ProtectedRoute;
