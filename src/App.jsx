import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./features/gitUserSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    console.log(state.app);
    return state.app;
  });
  if (data.loading === true) {
    return <p className="Loading">Loading...</p>;
  }
  if (data.error != null) {
    return <h3>Error: {data.error}</h3>;
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => dispatch(getAllData())}>Get Github Users</button>
      <ul className="user-list">
        {data.users.map((ele) => (
          <li key={ele.id}>
            <img src={ele.avatar_url} alt="" className="user-avatar" />
            <span>{ele.login}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
