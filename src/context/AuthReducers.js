const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        error: action.payload,
      };

    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: [...state.user.followings, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          followings: state.user.followings.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
