import { useState, useEffect } from "react";
import "./Todos.css";
import Navbar from "../../components/Navbar/Navbar";
import { IoFlag } from "react-icons/io5";
const Todos = () => {
  const todos = [
    {
      isNotified: false,
      _id: "66d40b29e57be94d36c65536",
      title: "Todo 1",
      description: "description for Todo 1",
      status: "completed",
      deadline: "2024-09-01T18:30:00.000Z",
      priority: "low",
      userId: {
        _id: "66d32691451947c102ac80d4",
        name: "username",
        email: "nirupamasoundarr@gmail.com",
        password:
          "$2b$10$CIq9EOA4rtPMBrkaOA/dYeIYo7ym.XWa/qH2P1H/Dv.ZmEPATv.qu",
        role: "user",
        mobile: "9975488621",
        image: "uploads\\1725111263934-avatar.png",
        otp: null,
        todos: [
          "66d40b29e57be94d36c65536",
          "66d40b2fe57be94d36c6553a",
          "66d40b36e57be94d36c6553e",
          "66d40b3be57be94d36c65542",
          "66d40b3fe57be94d36c65546",
          "66d40b46e57be94d36c6554a",
        ],
        __v: 18,
      },
      completedOn: "2024-09-01T06:41:43.963Z",
      createdAt: "2024-09-01T06:35:21.381Z",
      updatedAt: "2024-09-01T06:35:21.381Z",
      __v: 0,
    },
    {
      isNotified: false,
      _id: "66d40b2fe57be94d36c6553a",
      title: "Todo 2",
      description: "description for Todo 2",
      status: "completed",
      deadline: "2024-09-01T18:30:00.000Z",
      priority: "low",
      userId: {
        _id: "66d32691451947c102ac80d4",
        name: "username",
        email: "nirupamasoundarr@gmail.com",
        password:
          "$2b$10$CIq9EOA4rtPMBrkaOA/dYeIYo7ym.XWa/qH2P1H/Dv.ZmEPATv.qu",
        role: "user",
        mobile: "9975488621",
        image: "uploads\\1725111263934-avatar.png",
        otp: null,
        todos: [
          "66d40b29e57be94d36c65536",
          "66d40b2fe57be94d36c6553a",
          "66d40b36e57be94d36c6553e",
          "66d40b3be57be94d36c65542",
          "66d40b3fe57be94d36c65546",
          "66d40b46e57be94d36c6554a",
        ],
        __v: 18,
      },
      completedOn: "2024-09-01T06:53:04.845Z",
      createdAt: "2024-09-01T06:35:27.638Z",
      updatedAt: "2024-09-01T06:35:27.638Z",
      __v: 0,
    },
    {
      _id: "66d40b36e57be94d36c6553e",
      title: "Todo 3",
      description: "description for Todo 3",
      status: "backlog",
      deadline: "2024-09-01T18:30:00.000Z",
      priority: "medium",
      userId: {
        _id: "66d32691451947c102ac80d4",
        name: "username",
        email: "nirupamasoundarr@gmail.com",
        password:
          "$2b$10$CIq9EOA4rtPMBrkaOA/dYeIYo7ym.XWa/qH2P1H/Dv.ZmEPATv.qu",
        role: "user",
        mobile: "9975488621",
        image: "uploads\\1725111263934-avatar.png",
        otp: null,
        todos: [
          "66d40b29e57be94d36c65536",
          "66d40b2fe57be94d36c6553a",
          "66d40b36e57be94d36c6553e",
          "66d40b3be57be94d36c65542",
          "66d40b3fe57be94d36c65546",
          "66d40b46e57be94d36c6554a",
        ],
        __v: 18,
      },
      completedOn: null,
      createdAt: "2024-09-01T06:35:34.990Z",
      updatedAt: "2024-09-01T06:35:34.990Z",
      __v: 0,
      isNotified: true,
    },
    {
      _id: "66d40b3be57be94d36c65542",
      title: "Todo 4",
      description: "description for Todo 4",
      status: "backlog",
      deadline: "2024-09-01T18:30:00.000Z",
      priority: "medium",
      userId: {
        _id: "66d32691451947c102ac80d4",
        name: "username",
        email: "nirupamasoundarr@gmail.com",
        password:
          "$2b$10$CIq9EOA4rtPMBrkaOA/dYeIYo7ym.XWa/qH2P1H/Dv.ZmEPATv.qu",
        role: "user",
        mobile: "9975488621",
        image: "uploads\\1725111263934-avatar.png",
        otp: null,
        todos: [
          "66d40b29e57be94d36c65536",
          "66d40b2fe57be94d36c6553a",
          "66d40b36e57be94d36c6553e",
          "66d40b3be57be94d36c65542",
          "66d40b3fe57be94d36c65546",
          "66d40b46e57be94d36c6554a",
        ],
        __v: 18,
      },
      completedOn: null,
      createdAt: "2024-09-01T06:35:39.277Z",
      updatedAt: "2024-09-01T06:35:39.277Z",
      __v: 0,
      isNotified: true,
    },
    {
      _id: "66d40b3fe57be94d36c65546",
      title: "Todo 5",
      description: "description for Todo 5",
      status: "backlog",
      deadline: "2024-08-31T18:30:00.000Z",
      priority: "medium",
      userId: {
        _id: "66d32691451947c102ac80d4",
        name: "username",
        email: "nirupamasoundarr@gmail.com",
        password:
          "$2b$10$CIq9EOA4rtPMBrkaOA/dYeIYo7ym.XWa/qH2P1H/Dv.ZmEPATv.qu",
        role: "user",
        mobile: "9975488621",
        image: "uploads\\1725111263934-avatar.png",
        otp: null,
        todos: [
          "66d40b29e57be94d36c65536",
          "66d40b2fe57be94d36c6553a",
          "66d40b36e57be94d36c6553e",
          "66d40b3be57be94d36c65542",
          "66d40b3fe57be94d36c65546",
          "66d40b46e57be94d36c6554a",
        ],
        __v: 18,
      },
      completedOn: null,
      createdAt: "2024-09-01T06:35:43.778Z",
      updatedAt: "2024-09-01T06:35:43.778Z",
      __v: 0,
      isNotified: false,
    },
    {
      _id: "66d40b46e57be94d36c6554a",
      title: "Todo 6",
      description: "description for Todo 6",
      status: "backlog",
      deadline: "2024-08-31T18:30:00.000Z",
      priority: "high",
      userId: {
        _id: "66d32691451947c102ac80d4",
        name: "username",
        email: "nirupamasoundarr@gmail.com",
        password:
          "$2b$10$CIq9EOA4rtPMBrkaOA/dYeIYo7ym.XWa/qH2P1H/Dv.ZmEPATv.qu",
        role: "user",
        mobile: "9975488621",
        image: "uploads\\1725111263934-avatar.png",
        otp: null,
        todos: [
          "66d40b29e57be94d36c65536",
          "66d40b2fe57be94d36c6553a",
          "66d40b36e57be94d36c6553e",
          "66d40b3be57be94d36c65542",
          "66d40b3fe57be94d36c65546",
          "66d40b46e57be94d36c6554a",
        ],
        __v: 18,
      },
      completedOn: null,
      createdAt: "2024-09-01T06:35:50.683Z",
      updatedAt: "2024-09-01T06:35:50.683Z",
      __v: 0,
      isNotified: false,
    },
    {
      _id: "66d43dab9f1628c75e0228be",
      title: "Todo 1",
      description: "description for Todo 1",
      status: "backlog",
      deadline: "2024-08-31T18:30:00.000Z",
      priority: "high",
      userId: {
        _id: "66d438ac19f801bed7efd091",
        name: "user-2",
        email: "dev.sathya1701@gmail.com",
        password:
          "$2b$10$7USxQW2vq40D.J2NQgEKPOsGf4dMHXqYckzyMuScYlUnIa9yFRHFG",
        role: "user",
        mobile: "9975400621",
        image: "uploads/avatar.png",
        otp: "0",
        todos: [
          "66d43dab9f1628c75e0228be",
          "66d43db49f1628c75e0228c2",
          "66d43dbc9f1628c75e0228c6",
        ],
        __v: 3,
      },
      completedOn: null,
      createdAt: "2024-09-01T10:10:51.063Z",
      updatedAt: "2024-09-01T10:10:51.063Z",
      __v: 0,
      isNotified: false,
    },
    {
      _id: "66d43db49f1628c75e0228c2",
      title: "Todo 2",
      description: "description for Todo 2",
      status: "backlog",
      deadline: "2024-09-01T18:30:00.000Z",
      priority: "medium",
      userId: {
        _id: "66d438ac19f801bed7efd091",
        name: "user-2",
        email: "dev.sathya1701@gmail.com",
        password:
          "$2b$10$7USxQW2vq40D.J2NQgEKPOsGf4dMHXqYckzyMuScYlUnIa9yFRHFG",
        role: "user",
        mobile: "9975400621",
        image: "uploads/avatar.png",
        otp: "0",
        todos: [
          "66d43dab9f1628c75e0228be",
          "66d43db49f1628c75e0228c2",
          "66d43dbc9f1628c75e0228c6",
        ],
        __v: 3,
      },
      completedOn: null,
      createdAt: "2024-09-01T10:11:00.312Z",
      updatedAt: "2024-09-01T10:11:00.312Z",
      __v: 0,
      isNotified: true,
    },
    {
      _id: "66d43dbc9f1628c75e0228c6",
      title: "Todo 3",
      description: "description for Todo 3",
      status: "backlog",
      deadline: "2024-09-02T18:30:00.000Z",
      priority: "low",
      userId: {
        _id: "66d438ac19f801bed7efd091",
        name: "user-2",
        email: "dev.sathya1701@gmail.com",
        password:
          "$2b$10$7USxQW2vq40D.J2NQgEKPOsGf4dMHXqYckzyMuScYlUnIa9yFRHFG",
        role: "user",
        mobile: "9975400621",
        image: "uploads/avatar.png",
        otp: "0",
        todos: [
          "66d43dab9f1628c75e0228be",
          "66d43db49f1628c75e0228c2",
          "66d43dbc9f1628c75e0228c6",
        ],
        __v: 3,
      },
      completedOn: null,
      createdAt: "2024-09-01T10:11:08.224Z",
      updatedAt: "2024-09-01T10:11:08.224Z",
      __v: 0,
      isNotified: false,
    },
  ];

  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    filterAndSortTodos();
  }, [searchTerm, sortOrder]);

  const filterAndSortTodos = () => {
    let filtered = todos.filter(
      (todo) =>
        todo.userId.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        todo.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortOrder === "lowToHigh") {
      filtered = filtered.sort((a, b) => {
        const priorityOrder = { low: 1, medium: 2, high: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
    } else if (sortOrder === "highToLow") {
      filtered = filtered.sort((a, b) => {
        const priorityOrder = { low: 1, medium: 2, high: 3 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      });
    }

    setFilteredTodos(filtered);
  };

  return (
    <>
      <Navbar role={"admin"} active={"tasks"} />
      <div className="todo-list">
        <div className="filters">
          <input
            type="text"
            placeholder="Search by user, title or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Priority</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        <div className="todo-cards-container">
          {filteredTodos.map((todo) => (
            <div
              key={todo._id}
              className={`todo-card ${
                todo.completedOn ? "todo-completed" : ""
              } ${todo.status === "backlog" ? "todo-backlog" : ""}`}
            >
              <div className="todo-header">
                <h3>{todo.title}</h3>
                <div className="todo-user">
                  <p>User: {todo.userId.name}</p>
                  <img
                    src={`http://localhost:3000/${todo.userId.image.replace(
                      "\\",
                      "/"
                    )}`}
                    alt={todo.userId.name}
                    className="todo-user-image"
                  />
                </div>
              </div>
              <div className="todo-body">
                <p>{todo.description}</p>
                <p>
                  Priority: {todo.priority}{" "}
                  <IoFlag className={`todo-${todo.priority}`} />
                </p>
                <p>Status: {todo.status}</p>
                <p>Deadline: {new Date(todo.deadline).toLocaleString()}</p>
                {todo.completedOn && (
                  <p>
                    Completed On: {new Date(todo.completedOn).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Todos;
