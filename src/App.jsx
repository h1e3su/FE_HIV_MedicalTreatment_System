import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import NavScrollExample from "./components/Navbar"; // Thêm dòng này

function App() {
  return (
    <BrowserRouter>
      <NavScrollExample /> {/* Thêm dòng này */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
