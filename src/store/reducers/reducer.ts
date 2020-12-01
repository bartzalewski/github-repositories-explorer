let initState = {
  username: '',
  users: [],
  repos: [],
  grabbedData: false,
};

const reducer = (state = initState, action: any) => {
  if (action.type === 'HANDLE_USERNAME') {
    return {
      ...state,
      username: action.e.target.value,
    };
  } else if (action.type === 'SUBMIT_FORM') {
    let ch = action.data;
    const items = ch.items.map((item: any) => {
      return item.login;
    });
    if (ch.items) {
      return {
        ...state,
        users: items,
        grabbedData: true,
      };
    } else {
      return {
        ...state,
        message: 'User Not Found.',
      };
    }
  } else if (action.type === 'CHOOSE_USERNAME') {
    let ch = action.data;
    const items = ch.map((item: any) => {
      return item;
    });
    if (ch) {
      return {
        ...state,
        repos: items,
        grabbedData: true,
      };
    } else {
      return {
        ...state,
        message: 'No repos',
      };
    }
  }
  return state;
};

export default reducer;
