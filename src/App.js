import { Routes, Route } from "react-router-dom";

import NavbarComp from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Plans from "./components/plans/plan_listing/Plans";
import DetailedPlan from "./components/plans/detailed_plans/DetailedPlan";
import Subscriptions from "./components/subscriptions/Subscriptions";
import CreatePlan from "./components/plans/create_plan/CreatePlan";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import SigninByEmail from "./components/Slack Sigin/SigninByEmail";

function App() {
  return (
    <div className="App">
    <SigninByEmail />
      <NavbarComp />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/plans" element={<Plans />} />
        <Route exact path="/detailed_plans" element={<DetailedPlan />} />
        <Route exact path="/subscriptions" element={<Subscriptions />} />
        <Route exact path="/create-plan" element={<CreatePlan />} />
      </Routes>
    </div>
  );
}

export default App;
