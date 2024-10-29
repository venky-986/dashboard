import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<Team />} />
              <Route path="/superstockez" element={<Contacts />} />
              <Route path="/stockez" element={<Invoices />} />
              <Route path="/agents" element={<Form />} />
              <Route path="/loginrequest" element={<Bar />} />
              <Route path="/pointstransfer" element={<Pie />} />
              <Route path="/dashboard" element={<Line />} />
              <Route path="/managegames" element={<FAQ />} />
              <Route path="/gamesummary" element={<Calendar />} />
              <Route path="/playerhistory" element={<Geography />} />
              <Route path="/turnoverreports" element={<Geography />} />
              <Route path="/transactionreport" element={<Geography />} />
              <Route path="/commissionreport" element={<Geography />} />
              <Route path="/alltransactionreport" element={<Geography />} />
              <Route path="/changetransactionpin" element={<Geography />} />
              <Route path="/settings" element={<Geography />} />
              <Route path="/rolesassigned" element={<Geography />} />
              <Route path="/agentsalereport" element={<Geography />} />
              <Route path="/stockezsales" element={<Geography />} />
              <Route path="/superstockez" element={<Geography />} />
              <Route path="/resulthistory" element={<Geography />} />

            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
