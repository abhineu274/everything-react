import { useEffect, useState } from "react";

/*
2. useEffect : Most powerful and controversial hook in React. It allows you to perform side effects in your functional components.
    - The effect hook is used to perform side effects in functional components.
    - The effect hook is a replacement for componentDidMount, componentDidUpdate, and componentWillUnmount lifecycle methods.
    - The effect hook is a function that takes two arguments: a callback function and an array of dependencies.
    - The callback function is called after the component is rendered.
    - The array of dependencies is an optional argument that allows you to control when the effect runs.
    - If you pass an empty array, the effect will only run after the first render.
    - If you pass an array with values, the effect will run after the first render and whenever any of the values in the array change.
    - If you don't pass an array, the effect will run after the first render and after every update.
    - The callback function can return a cleanup function that will run before the effect runs again or when the component is unmounted.
*/

export const EffectExample = () => {
  const [posts, setPosts] = useState<string[]>([]);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const postTitles = data.map((post: any) => post.title);
        setPosts(postTitles);
      });

    return () => {
      console.log("cleanup"); //it will run before the effect runs again or when the component is unmounted
    };
  }, []); //we are not passing any dependencies, so it will run only once after the first render

  useEffect(() => {
    console.log("visible changed", visible);
  }, [visible]); //it will run after the first render and whenever the value of visible changes

  useEffect(() => {
    console.log("I render after every update");
  }); //it will run after the first render and after every update as we are not passing any dependencies

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>
        {visible ? "Hide" : "Show"}
      </button>
      <h1>Posts</h1>
      {visible && (
        <ul>
          {posts.map((post) => (
            <li>{post}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

/*
IMP : 
use of useEffect hook is discouraged as it can lead to performance issues and make the code harder to understand.
so, we should use it only when necessary and try to avoid it as much as possible.
*/
