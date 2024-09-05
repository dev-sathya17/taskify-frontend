import { protectedInstance } from "./instance";

const todoService = {
  updateTodo: async (id, data) => {
    try {
      const response = await protectedInstance.put(`/todos/${id}`, data);
      return { data: response.data, status: response.status };
    } catch (error) {
      return error.response.data.message;
    }
  },
  deleteTodo: async (id) => {
    try {
      const response = await protectedInstance.delete(`/todos/${id}`);
      return { data: response.data, status: response.status };
    } catch (error) {
      return error.response.data.message;
    }
  },
};

export default todoService;
