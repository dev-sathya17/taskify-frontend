import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./UserDashboard.css";

const UserDashboard = () => {
  const { role } = useLoaderData();
  return (
    <>
      <Navbar role={role} />
      <main className="usr-dashboard">
        <section className="usr-dashboard-row">
          <div className="usr-dashboard-cell"></div>
          <div className="usr-dashboard-cell bar-graph"></div>
        </section>
        <section className="usr-dashboard-row">
          <div className="usr-dashboard-cell"></div>
          <div className="usr-dashboard-cell"></div>
          <div className="usr-dashboard-cell"></div>
        </section>
      </main>
    </>
  );
};

export default UserDashboard;
