const initialState = {
  isLoading: true,
  isAuthenticated: false,
  email: '',
  username: ''
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return { ...state };
  }
};

export default auth;
