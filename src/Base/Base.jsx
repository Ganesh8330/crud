import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const Base = ({ title, description, children }) => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div className="main-container">
              <header>
                <nav>
                  <div>
                    <h1 style={{marginRight:'80px'}}>Application</h1>
                  </div>
                  <div className="nav-btn-group">
                    <button onClick={() => navigate("/")}>DashBoard</button>
                    <button onClick={() => navigate("/students")}>
                      Students
                    </button>
                    <button onClick={() => navigate("/add-students")}>
                      Add Student
                    </button>
                    <button>Teachers</button>
                    <button>Add Teachers</button>
                  </div>
                </nav>
              </header>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <h1>{title}</h1>
        <h4>{description}</h4>
        <div className="contents">{children}</div>
      </main>
    </>
  );
};

export default Base;
