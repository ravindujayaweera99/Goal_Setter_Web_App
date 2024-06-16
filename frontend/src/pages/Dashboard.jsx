import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import GoalForm from "../components/GoalForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        <h1>Welcome Back {user && user.name} </h1>
        <p>Your Goals</p>
      </section>
      <GoalForm />
    </>
  );
};

export default Dashboard;
