import "./App.css";
import Counter from "./features/counter/Counter";
import PostLists from "./features/posts/postsLists"

function App() {
  return (
    <div className="App">
      <Counter />
      <PostLists />
    </div>
  );
}

export default App;
