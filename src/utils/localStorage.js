// Function to load the state from localStorage
export const loadState = () => {
  try {
    // Get the serialized state from localStorage
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      // If no state is found, return undefined
      return undefined;
    }
    // Parse and return the serialized state
    return JSON.parse(serializedState);
  } catch (err) {
    // If an error occurs, return undefined
    return undefined;
  }
};

// Function to save the state to localStorage
export const saveState = (state) => {
  try {
    // Serialize the state to a string
    const serializedState = JSON.stringify(state);
    // Save the serialized state to localStorage
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors
  }
};
