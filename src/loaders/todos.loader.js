import todoService from "../services/todos.service";

const todosLoader = {
  fetchUserTodos: async () => {
    try {
      const response = await todoService.getUserTodos();
      return { data: response };
    } catch (error) {
      return error.response.data.message;
    }
  },
};

export default todosLoader;
