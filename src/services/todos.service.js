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
  getTodosByStatus: async () => {
    try {
      const response = await protectedInstance.get("/todos/count/status");
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  },
  getTodosByPriority: async () => {
    try {
      const response = await protectedInstance.get("/todos/count/priority");
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  },
  getTodosCompletion: async () => {
    try {
      const response = await protectedInstance.get("/todos/count/completion");
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  },
  getTodosForToday: async () => {
    try {
      const response = await protectedInstance.get("/todos/count/today");
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  },
  getTotalCompletionPercentage: async () => {
    try {
      const response = await protectedInstance.get(
        "/todos/count/completion/percentage"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return error.response.data.message;
    }
  },
};

export default todoService;
