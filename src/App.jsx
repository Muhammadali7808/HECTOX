import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/main_layout";
import { Home } from "./pages/home/home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
