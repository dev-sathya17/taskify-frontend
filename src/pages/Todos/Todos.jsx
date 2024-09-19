import { useState, useEffect } from "react";
import "./Todos.css";
import Navbar from "../../components/Navbar/Navbar";
import { IoFlag } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";
import todoService from "../../services/todos.service";
const Todos = () => {
  const { data } = useLoaderData();

  const [filteredTodos, setFilteredTodos] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    filterAndSortTodos();
  }, [searchTerm, sortOrder]);

  const filterAndSortTodos = () => {
    let filtered = data.filter(
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (todo) => {
    setFormData(todo);
    setModalOpen(true);
  };

  const updateData = () => {
    setLoading(true);
    todoService
      .updateTodo(formData._id, formData)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          const updatedTodos = filteredTodos.map((todo) =>
            todo._id === formData._id ? formData : todo
          );
          setFilteredTodos(updatedTodos);
          setFormData(null);
          alert("Todo updated successfully");
          setModalOpen(false);
        } else {
          alert(response);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(error.message);
      });
  };

  const handleDelete = (id) => {
    setLoading(true);
    todoService
      .deleteTodo(id)
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          const updatedTodos = filteredTodos.filter((todo) => todo._id !== id);
          setFilteredTodos(updatedTodos);
          alert("Todo deleted successfully");
        } else {
          alert(response);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(error.message);
      });
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
                    src={`https://todolist-backend-hu3n.onrender.com/${todo.userId.image.replace(
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
              <div className="todo-footer">
                <button
                  className="update-btn"
                  disabled={loading}
                  onClick={() => handleUpdate(todo)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  disabled={loading}
                  onClick={() => handleDelete(todo._id)}
                >
                  {loading ? "Loading..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Edit Todo</h2>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </label>
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
            <label>
              Priority:
              <select
                name="priority"
                id="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">Low</option>{" "}
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
            <label>
              Status:
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="backlog">Backlog</option>{" "}
                <option value="pending">Pending</option>
                <option value="in-progress">In-Progress</option>
                <option value="completed">Completed</option>
              </select>
            </label>
            <label>
              Deadline:
              <input
                type="date"
                name="deadline"
                value={formData.deadline.split("T")[0]}
                onChange={handleChange}
              />
            </label>
            <div className="modal-actions">
              <button className="save-btn" onClick={updateData}>
                {loading ? "Saving..." : "Save"}
              </button>
              <button className="close-btn" onClick={() => setModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todos;
