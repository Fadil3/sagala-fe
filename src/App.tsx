import { Routes, Route } from "react-router-dom";
import DataTablePage from "./pages/DataTablePage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="data-tables/*" element={<DataTablePage />} />
    </Routes>
  );
};

export default App;
