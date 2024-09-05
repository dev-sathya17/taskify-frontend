import userServices from "../services/user.service";

// Defining a user loader object
const userLoader = {
  checkAuth: async () => {
    try {
      const { role } = await userServices.checkAuth();
      if (role) {
        return { isAuthenticated: true, role };
      } else {
        return { isAuthenticated: false, role: null };
      }
    } catch (error) {
      return { isAuthenticated: false, role: null };
    }
  },
};

// Exporting the user loader object
export default userLoader;
