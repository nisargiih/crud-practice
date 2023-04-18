const initValue = {
  listValue: {
    data: []
  },
  openTextField: {
    open: false
  }
};

export const listReducer = (state = initValue, action) => {
  switch (action.type) {
    case "START_ADD_LIST": {
      console.log("Action is start", action);
      return {
        ...state,
        listValue: {
          data: [...state.listValue.data, action.data]
        }
      };
    }
    case "OPEN_TEXT_FIELD": {
      console.log("Action is sucess", action);
      return {
        ...state,
        openTextField: {
          open: action.data
        }
      };
    }
    // case "ERROR_ADD_LIST": {
    //   console.log("Action is in error");
    //   return {
    //     ...state,
    //     listValue: {
    //       loading: false,
    //       data: [],
    //       message: action.message
    //     }
    //   };
    // }
    default: {
      return state;
    }
  }
};
