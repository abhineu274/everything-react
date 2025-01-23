import { useState, useDeferredValue } from "react";

/*
11. useDefferedValue:
   New in React 18, useDeferredValue is a hook that is somewhat similar to debounce.
   It defers the value update until the next render/some time.
   It is useful when you have a heavy computation or a value that changes frequently.
   Real life example : Inbox search in AMIE
*/

export const DefferedValueExample = () => {
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`); //creating 10000 items
  const [query, setQuery] = useState<string>("");
  const deferredQuery = useDeferredValue(query); //deferredQuery is the deferred value of query
  //deferred is to delay or postpone

  const filteredItems = items.filter(
    (item) => item.toLowerCase().includes(deferredQuery.toLowerCase()) //filtering based on deferredQuery instead of query
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} //setting query on change
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
