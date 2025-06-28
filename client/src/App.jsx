//srsc/ App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages/Components
import Home from "./components/common/Home";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import UserHome from "./components/user/UserHome";
import AdminHome from "./components/admin/AdminHome";
import UserAppointments from "./components/user/UserAppointments";

function App() {
          const userLoggedIn = !!localStorage.getItem("userData");

          return (
                    <div className="App">
                              <Router>

                                        <div className="content">
                                                 
                                                  <Routes>
                                                            <Route path="/" element={<Home />} />
                                                            <Route path="/login" element={<Login />} />
                                                            <Route path="/register" element={<Register />} />

                                                            {userLoggedIn ? (
                                                                      <>
                                                                                <Route path="/adminhome" element={<AdminHome />} />
                                                                                <Route path="/userhome" element={<UserHome />} />
                                                                                <Route path="/userhome/userappointments/:doctorId" element={<UserAppointments />} />
                                                                      </>
                                                            ) : (
                                                                      <Route path="/login" element={<Login />} />
                                                            )}
                                                  </Routes>
                                        </div>
                                        <footer className="bg-dark text-right text-lg-start text-white">
                                                  <div className="text-center p-3">© 2025 Developed By KVVS Manohar, A.Vijay Durga,J.Durga Prasanna, D. Srinu </div>
                                        </footer>
                              </Router>
                    </div>
          );
}

export default App;