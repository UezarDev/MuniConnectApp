import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  CssBaseline,
  Box,
  ThemeProvider,
  createTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import FeedPage from "./pages/FeedPage";
import IssueReportPage from "./pages/IssueReportPage";
import DashboardPage from "./pages/DashboardPage";
import EventsPage from "./pages/EventsPage";
import AuthPage from "./pages/AuthPage";
import { useMemo, useState, useEffect, useRef, useLayoutEffect } from "react";

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          background: {
            default: "#181c20",
            paper: "rgba(16,18,22,0.96)", // even darker than before
          },
          primary: {
            main: "#90caf9",
          },
          secondary: {
            main: "#f48fb1",
          },
        }
      : {
          background: {
            default: "#f4f6fa",
            paper: "rgba(255,255,255,0.85)",
          },
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#d81b60",
          },
        }),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(18px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          backgroundImage:
            mode === "dark" ? "linear-gradient(135deg, rgba(30,34,40,0.18) 0%, rgba(0,0,0,0.12) 100%)" : undefined,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(24,28,32,0.75)",
          backdropFilter: "blur(48px)",
          WebkitBackdropFilter: "blur(48px)",
          boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.10)",
        },
      },
    },
  },
});

// Dynamically load BackdropFilter from the global window object
const BackdropFilter = (window as any)["react-backdrop-filter"]?.default;

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<"light" | "dark">(prefersDarkMode ? "dark" : "dark");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  // Sticky Navbar logic
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Dynamically load the BackdropFilter UMD if available
    const scriptId = "backdropfilter-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "/BackdropFilter.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div ref={navbarRef} style={{ position: "relative", zIndex: 1300 }}>
          <AppBar
            position="fixed"
            elevation={scrolled ? 6 : 2}
            className={scrolled ? "navbar scrolled" : "navbar"}
            sx={{
              transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
              ...(scrolled && {
                background: "rgba(24,28,32,0.92)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
              }),
              // fallback for browsers that support CSS backdrop-filter
              backdropFilter: "blur(6px) sepia(50%)",
              WebkitBackdropFilter: "blur(6px) sepia(50%)",
            }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                MuniConnect San Miguel
              </Typography>
              <Button color="inherit" component={Link} to="/">
                Feed
              </Button>
              <Button color="inherit" component={Link} to="/report">
                Report Issue
              </Button>
              <Button color="inherit" component={Link} to="/events">
                Events
              </Button>
              <Button color="inherit" component={Link} to="/dashboard">
                Dashboard
              </Button>
              <Button color="inherit" component={Link} to="/auth">
                Login
              </Button>
              <Button color="inherit" onClick={toggleTheme} sx={{ ml: 2 }}>
                {mode === "dark" ? "Light" : "Dark"} Mode
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <Box sx={{ width: "100vw", minHeight: "100vh", bgcolor: "background.default", pt: { xs: 10, sm: 12 } }}>
          <Container maxWidth="md">
            <Routes>
              <Route path="/" element={<FeedPage />} />
              <Route path="/report" element={<IssueReportPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
