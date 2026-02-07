import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../context/YourContext";
import { useNavigate } from "react-router";

export default function ProtecttedRoute({ children }) {
  const { currentUser } = useContext(ContextProvider);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser) {
      setLoading(true);
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  if (loading) return <h1 className="text-6xl">Loading...</h1>;

  return <>{children}</>;
}
