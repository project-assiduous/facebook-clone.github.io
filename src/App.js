import Header from "./components/HeaderFiles/Header";
import PostCreator from "./components/Make_Post/Post_Creator";
import MyDays from "./components/My_Days/MyDays";
import Room from './components/Personal_Room/index.js'
import Post from "./components/PostCard";

function App() {
  return (
    <div className="bg-gray-100">
      <Header />
      <MyDays />
      <PostCreator />
      <Room />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default App;
