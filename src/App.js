import logo from "./logo.svg";
import "./App.css";
import Words from "./components/Words";
import { ToastContainer, toast, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        closeButton={false}
        transition={Flip}
      />
      <div className="header-container">
        <h1 className="header-title">WORDLE</h1>
      </div>
      <div className="body-container">
        {/* <Message>Hello</Message> */}
        <Words />
      </div>
    </div>
  );
}

export default App;
