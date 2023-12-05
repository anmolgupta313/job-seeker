const saveJobState = {
  saveJob: null,
};

export const saveJobReducer = (state = saveJobState, action) => {
  switch (action.type) {
    case "save-job":
      return {
        ...state,
        saveJob: action.payload.saveJob,
      };
      default: return state
  }
};
