import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import KanbanBoard from "../../components/KanbanBoard/KanbanBoard";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import Modal from "react-modal";
import "./Workspace.css";
import todoService from "../../services/todos.service";
const Workspace = () => {
  const { data } = useLoaderData();
  const [filter, setFilter] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "low",
    deadline: "",
  });

  const filteredTasks = data.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTodoClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    todoService
      .addTodo(formData)
      .then((response) => {
        if (response.status === 201) {
          alert(response.data.message);
          data.push(response.data.savedTodo);
          closeModal();
          setFormData({
            title: "",
            description: "",
            priority: "low",
            deadline: "",
          });
        } else {
          alert(response);
          closeModal();
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error);
        closeModal();
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Navbar role={"user"} active={"tasks"} />
      <div className="workspace-header">
        <button onClick={handleAddTodoClick} className="add-todo-btn">
          Add Todo <MdAdd className="add-icon" />
        </button>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search tasks"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="picklist">
          <label htmlFor="priority-filter">Sort by priority:</label>
          <select
            id="priority-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="none">None</option>
            <option value="high-to-low">High to Low</option>
            <option value="low-to-high">Low to High</option>
          </select>
        </div>
      </div>
      <KanbanBoard tasks={filteredTasks} filter={filter} />
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <h2>Add New Todo</h2>
        <form onSubmit={handleSubmitTodo}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            required
            onChange={handleChange}
            value={formData.title}
          />
          <label>Description</label>
          <textarea
            required
            name="description"
            onChange={handleChange}
            value={formData.description}
          ></textarea>
          <label>Priority</label>
          <select
            required
            value={formData.priority}
            name="priority"
            onChange={handleChange}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <label>Deadline</label>
          <input
            type="date"
            required
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
          <button type="submit">Add Todo</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </>
  );
};

export default Workspace;
