import { useEffect, useSyncExternalStore } from "react";
import { fetchPokeman, getState, subscribe } from "./pokemonStore";
/* Incomplete - Due to some issue not getting the values in pokemon array*/
/*
12. useSyncExternalStore:
    New in React 18, useSyncExternalStore is a hook that allows you to sync the external store with React.
    It is useful when you have a store that is not managed by React.
    It is somewhat similar to useContext or useReducer. It is very similar to redux.
    Main use case is - if we have to sync the external store data with React.

    Real Life Use Case: AMIE SMS Chat Application
    While recieving a new message in a chat application, we can sync the messages without any hurdle.
    We don't have to add an useEffect to listen to the changes in the store.
    Everything is managed by React itself, and it is optimized.
*/

export const SyncExternalStoreExample = () => {
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  /* Normal way of fetching data : 
  const [pokeman, setPokeman] = useState<any>([]);

  const fetchPokeman = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    setPokeman(data.results);
  };
  */

  useEffect(() => {
    console.log("Pokemons: ", pokemons);
  }, [pokemons]);

  useEffect(() => {
    fetchPokeman(); //calling the fetchPokeman function from pokemonStore.ts
  }, []);

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {pokemons.map((pokemon: any) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
