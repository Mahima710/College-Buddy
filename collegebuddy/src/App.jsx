import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ExpenseTracker from "./pages/ExpenseTracker";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/expensetracker" element={<ExpenseTracker />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
