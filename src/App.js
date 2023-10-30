import {useEffect} from "react";
import Header from "./components/Common/Header/Header";
import Main from "./components/Main/Main";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./redux/createAsyncThunk/fetchUsersCAT";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
