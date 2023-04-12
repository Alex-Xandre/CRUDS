export default (state, action) => {
  switch (action.type) {
    case "REMOVE_INVOICE":
      return {
        ...state,
        invoice: state.invoice.filter((tsk) => {
          return tsk.id !== action.payload;
        }),
      };

    case "UPDATE_INVOICE":
      const updatedTask = action.payload;

      const updatedTasks = state.invoice.map((tsk) => {
        if (tsk.id === updatedTask.id) {
          return updatedTask;
        }
        return tsk;
      });

      return {
        ...state,
        invoice: updatedTasks,
      };

    case "ADD_INVOICE":
      return {
        ...state,
        invoice: [action.payload, ...state.invoice],
      };

    default:
      return state;
  }
};
