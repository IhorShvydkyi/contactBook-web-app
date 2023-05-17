const getLoggedIn = (state: any) => state.auth.isLoggedIn;
const getUserName = (state: any) => state.auth.user.name;

const authSelectors = {
  getLoggedIn,
  getUserName,
};

export default authSelectors;
