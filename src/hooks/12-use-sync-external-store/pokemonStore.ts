let state = { pokemons: [] }; //Initial state

let listeners: any[] = []; //Listeners array

//Function to fetch data and update the state
export const fetchPokeman = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await response.json();
  state.pokemons = data.results;
  console.log("Data: ", data);
  console.log("State: ", state);
  console.log("Listeners: ", listeners);
  listeners.forEach((listener) => listener()); //Notify the listeners
};

//Function to get the state
export const getState = () => {
  console.log("State2: ", state);
  return state;
};

//Function to subscribe to the state
export const subscribe = (listener: any) => {
  console.log("Listener2: ", listener);
  listeners.push(listener); //Add the listener to the listeners array

  return () => {
    //Return a function to unsubscribe
    listeners = listeners.filter((l) => l !== listener); //Remove the listener from the listeners array
  };
};
