import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Componenet/Share/Header/Header";
import Footer from "./Componenet/Share/Footer/Footer";

function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
