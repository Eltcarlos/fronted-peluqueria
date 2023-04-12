import { Route, Routes } from "react-router-dom";
import ToastContainer from "./components/Notifications/ToastContainer";
import { SocketProvider } from "./context/SocketContext";
import { ProtectedRouter } from "./helpers/ProtectedRouter";
import CashRegister from "./pages/Dashboard/CashRegister";
import DashBoard from "./pages/Dashboard/DashBoard";
import Reservation from "./pages/Dashboard/Reservation";
import HomeScreen from "./pages/HomeScreen";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

const App = () => {
  return (
    <SocketProvider>
      <ToastContainer />
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* ADMIN ROUTES */}
        <Route element={<ProtectedRouter />}>
          <Route path="/dashboard/statistics" element={<DashBoard />} />
          <Route path="/dashboard/cash" element={<CashRegister />} />
          <Route path="/dashboard/reservation" element={<Reservation />} />
        </Route>
      </Routes>
    </SocketProvider>
  );
};

export default App;
