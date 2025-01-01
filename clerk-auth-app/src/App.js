import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PublicPage from "./components/PublicPage";
import ProtectedPage from "./components/ProtectedPage";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="/protected"
            element={
              <SignedIn>
                <ProtectedPage />
              </SignedIn>
            }
          />
          <Route
            path="*"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
