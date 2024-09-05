import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import adminService from "../../services/admin.service";
import PieChartComponent from "../../components/pie chart/PieChartComponent";
import BarChartComponent from "../../components/bar chart/BarChart";
import { FaUsers } from "react-icons/fa6";
import { IoToday } from "react-icons/io5";

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [todosByStatus, setTodosByStatus] = useState([]);
  const [todosByPriority, setTodosByPriority] = useState([]);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [todosForToday, setTodosForToday] = useState(0);
  const [completionData, setCompletionData] = useState([]);

  useEffect(() => {
    adminService
      .getUsersCount()
      .then((response) => {
        setUserCount(response.totalUsers);
      })
      .catch((error) => {
        console.log(error);
      });

    adminService
      .getTodosByPriority()
      .then((response) => {
        const data = [
          {
            name: "low",
            value: response.low,
          },
          {
            name: "medium",
            value: response.medium,
          },
          {
            name: "high",
            value: response.high,
          },
        ];
        setTodosByPriority(data);
      })
      .catch((error) => {
        console.log(error);
      });

    adminService
      .getTodosByStatus()
      .then((response) => {
        const data = [
          {
            name: "Completed",
            value: response.completed,
          },
          {
            name: "Pending",
            value: response.pending,
          },
          {
            name: "Backlogs",
            value: response.backlog,
          },
          {
            name: "In-Progress",
            value: response["in-progress"],
          },
        ];
        setTodosByStatus(data);
      })
      .catch((error) => {
        console.log(error);
      });

    adminService
      .getTotalCompletionPercentage()
      .then((response) => {
        setCompletionPercentage(response.completionPercentage);
      })
      .catch((error) => {
        console.log(error);
      });

    adminService
      .getTodosForToday()
      .then((response) => {
        setTodosForToday(response.dueToday);
      })
      .catch((error) => {
        console.log(error);
      });

    adminService
      .getTodosCompletion()
      .then((response) => {
        const data = [];
        for (let i in response) {
          data.push({
            date: i,
            value: response[i],
          });
        }
        setCompletionData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCompletionMessage = (completionPercentage) => {
    if (completionPercentage === 100) {
      return "Congratulations! You did it—well done on completing your tasks!";
    } else if (completionPercentage >= 90) {
      return "One final push! You’re just moments away from completing it all.";
    } else if (completionPercentage >= 70) {
      return "You’re so close! Just a little more effort and you’ll cross the finish line.";
    } else if (completionPercentage >= 50) {
      return "You’re over halfway there! Keep your eye on the goal!";
    } else if (completionPercentage >= 30) {
      return "You’re halfway to greatness—keep that energy going!";
    } else if (completionPercentage >= 10) {
      return "Progress is progress, no matter how small. Keep going, you’re doing great!";
    } else if (completionPercentage > 0) {
      return "The hardest part is starting. Now that you have, you’re on your way!";
    } else {
      return "Every great journey begins with a single step. You’ve taken the first one—keep going!";
    }
  };

  const { role } = useLoaderData();
  return (
    <>
      <Navbar role={role} />
      <main className="adm-dashboard">
        <section className="adm-dashboard-row">
          <div className="adm-dashboard-cell">
            <p className="adm-dashboard-title">Tasks By Status</p>
            {todosByStatus && todosByStatus.length > 0 ? (
              <PieChartComponent data={todosByStatus} />
            ) : (
              <h3>There are no tasks.</h3>
            )}
          </div>
          <div className="adm-dashboard-cell adm-bar-graph">
            <p className="adm-dashboard-title">Task completion Graph</p>
            {completionData && completionData.length > 0 ? (
              <BarChartComponent data={completionData} />
            ) : (
              <h3>No tasks completed</h3>
            )}
          </div>
        </section>
        <section className="adm-dashboard-row">
          <div className="adm-dashboard-cell">
            <p className="adm-dashboard-title">Tasks By Priority</p>
            {todosByPriority && todosByPriority.length > 0 ? (
              <PieChartComponent data={todosByPriority} />
            ) : (
              <h3>There are no tasks.</h3>
            )}
          </div>
          <div className="adm-dashboard-cell adm-box">
            <p className="adm-dashboard-title">Total Users:</p>
            <FaUsers className="adm-dashboard-icon" />
            <h1 className="adm-dashboard-value">{userCount}</h1>
          </div>
          <div className="adm-dashboard-cell adm-box">
            <p className="adm-dashboard-title">Total Tasks for Today:</p>
            <IoToday className="adm-dashboard-icon" />
            <h1 className="adm-dashboard-value">{todosForToday}</h1>
          </div>
          <div className="adm-dashboard-cell adm-box">
            <p className="adm-dashboard-title">Total Completion Percentage:</p>
            <h1 className="adm-dashboard-value">{completionPercentage}%</h1>
            <p className="adm-dashboard-perc-text">
              {getCompletionMessage(completionPercentage)}
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdminDashboard;
