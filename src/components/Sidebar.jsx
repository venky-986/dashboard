import React from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ApartmentOutlined,
  DevicesOutlined,
  EventOutlined,
  ListAltOutlined,
  MoneyOutlined,
  PeopleOutlined,
  ReceiptOutlined,
  SchoolOutlined,
  SourceOutlined,
  VerifiedUserOutlined,
  TerminalOutlined,
  HomeOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  SettingsOutlined,
  AttachMoneyOutlined,
  CloudSyncOutlined,
  AccountCircle,
  HubOutlined,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { useUser } from "@supabase/auth-helpers-react";
import { tokens } from "../theme";
import ScoreBox from "./ScoreBox";
import logoImage from "assets/logo.png";

const navItems = [
  {
    text: "Dashboard",
    path: "",
    icon: <HomeOutlined />,
  },
  {
    text: "GRC",
    icon: null,
  },
  {
    text: "Risk Scorecard",
    path: "riskscorecard",
    icon: <MoneyOutlined />,
  },
  {
    text: "Assessments",
    path: "assessments",
    icon: <VerifiedUserOutlined />,
  },
  {
    text: "Risk Register",
    path: "riskregister",
    icon: <ListAltOutlined />,
  },
  {
    text: "Policy / Procedure",
    path: "policyandprocedure",
    icon: <SourceOutlined />,
  },
  {
    text: "Document Library",
    path: "documents",
    icon: <SourceOutlined />,
  },
  {
    text: "Meetings",
    path: "meetings",
    icon: <EventOutlined />,
  },
  {
    text: "Training",
    path: "training",
    icon: <SchoolOutlined />,
  },
  {
    text: "Data",
    icon: null,
  },
  {
    text: "Company",
    path: "company",
    icon: <ApartmentOutlined />,
  },
  {
    text: "People",
    path: "people",
    icon: <PeopleOutlined />,
  },
  {
    text: "Network",
    path: "network",
    icon: <HubOutlined />,
  },
  {
    text: "Vendors",
    path: "vendors",
    icon: <ReceiptOutlined />,
  },
  {
    text: "Hardware",
    path: "hardware",
    icon: <DevicesOutlined />,
  },
  {
    text: "Software",
    path: "software",
    icon: <TerminalOutlined />,
  },

  {
    text: "Admin",
    icon: null,
  },
  {
    text: "Settings",
    path: "settings",
    icon: <SettingsOutlined />,
  },
  {
    text: "Billing",
    path: "billing",
    icon: <AttachMoneyOutlined />,
  },
  {
    text: "Probes",
    path: "probes",
    icon: <CloudSyncOutlined />,
  },
];

const Sidebar = ({
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const user = useUser();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  useEffect(() => {
    setIsSidebarOpen(isNonMobile);
  }, [isNonMobile]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 1rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mr="15px"
                ></Box>
{/*               <Box
                component="img"
                alt="KnowByte Solutions"
                src={logoImage}
                height="65px"
                width="140px"

              /> */}
              <Typography variant="h5">
                CleaRisk&reg; Portal
              </Typography>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <Box mb="20px" display="flex" justifyContent="center" alignItems="center">
              <ScoreBox score={0} />
            </Box>
            <List>
              {navItems.map(({ text, path, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate("/" + path);
                        setActive(path);
                      }}
                      sx={{
                        backgroundColor:
                          active === path
                            ? colors.primary[400]
                            : "transparent",
                        color:
                          active === path
                            ? colors.secondary
                            : colors.primary,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === path && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
