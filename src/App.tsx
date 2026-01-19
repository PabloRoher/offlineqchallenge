import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LeaderboardPage from "./pages/LeaderboardPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
    );
}

export default App;