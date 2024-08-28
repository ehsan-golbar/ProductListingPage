import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/Store";
import Routing from "./components/Routing";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}

      <Provider store={store}>
        <Routing></Routing>
      </Provider>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
