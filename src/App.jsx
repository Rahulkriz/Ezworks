import "./App.css";

import ClientsA from "./Components/ClientsA";
import ProfileA from "./Components/ProfileA";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div className="background">
        <Sidebar />
        <ClientsA />
        <ProfileA />
      </div>
    </>
  );
}

export default App;
