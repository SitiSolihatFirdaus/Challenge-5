import { Route, Routes } from "react-router-dom";
import Row from "./components/Row";
import PopularList from "./pages/PopularList";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Row />} />
        <Route path="/popular/" element={<PopularList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
