import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Profile from "./Profile";

function  RouterList() {
return <Routes>
    <Route path="" element={<SignUp/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/profile" element={<Profile/>}/>
</Routes>

    
}
export default RouterList