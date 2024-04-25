import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (id === "1") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      Product {id} <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}
