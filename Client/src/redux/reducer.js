const saveJobState = {
  saveJob: null,
};

const delJobState = {
  delJob: null,
};

const getFetchDataState = {
  fetchApi: [],
};
export const saveJobReducer = (state = saveJobState, action) => {
  switch (action.type) {
    case "save-job":
      return {
        ...state,
        saveJob: action.payload.saveJob,
      };
    default:
      return state;
  }
};

export const delJobReducer = (state = delJobState, action) => {
  switch (action.type) {
    case "del-job":
      return {
        ...state,
        delJob: action.payload.delJob,
      };

    default:
      return state;
  }
};

export const fetchApiReducer = (state = getFetchDataState, action) => {
  switch (action.type) {
    case "get-Api-Data":
      return {
        ...state,
        getFetchData: action.payload.getFetchData,
      };

    default:
      return state;
  }
};
