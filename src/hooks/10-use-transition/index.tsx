import { useState, useTransition } from "react";

/*
10. useTransition:
    New in React 18, useTransition is a hook that allows you to start a transition and show a loading state until that transition is completed
    Handy and useful to show the loader/loading state.
*/

export const TransitionExample = () => {
  const [isPending, startTransition] = useTransition(); //isPending is false by default
  //For declaration, isPending needs to be before startTransition

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`); //creating 10000 items
  const [query, setQuery] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<string[]>(items);

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setQuery(query);
    //need to wrap the heavy code in startTransition
    startTransition(() => {
      //start transition, isPending will be true
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredItems(filtered);
    });
    //isPending will be false after the transition is completed
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleFilter} />
      {isPending ? (
        "Loading..."
      ) : (
        <ul>
          {filteredItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
