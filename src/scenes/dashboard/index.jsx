import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import moment from "moment";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.format("DD-MMM-YYYY, dddd");
  const formattedTime = currentTime.format("HH:mm:ss");

  return (
    <Box m="20px">
      {/* HEADER */}

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={formattedTime} // Display the time
            subtitle={formattedDate} // Display the date
          />
        </Box>

        <Box
    gridColumn="span 3"
    backgroundColor={colors.primary[400]}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    padding="20px"
    borderRadius="8px"
  >
    <Typography
      variant="h6"
      color={colors.grey[100]}
      fontWeight="bold"
      gutterBottom
      textAlign="center"
    >
      Today's Summary
    </Typography>

    <Typography
      variant="h3"
      color={colors.greenAccent[500]}
      fontWeight="bold"
      textAlign="center"
    >
      1,325,134
    </Typography>

    <Box mt="10px">
      <TrafficIcon
        sx={{ color: colors.greenAccent[600], fontSize: "36px" }}
      />
    </Box>
  </Box>

  {/* Buttons Box in Grid */}
  <Box
    gridColumn="span 2" // Adjust the span as needed for button width
    display="flex"
    flexDirection="column"
    gap="10px"
    alignItems="center"
    justifyContent="center"
  >
    <Button
      variant="contained"
      sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontWeight: "bold",
        padding: "10px 20px",
        width: "150px",
      }}
    >
      View Dashboard
    </Button>
    <Button
      variant="contained"
      sx={{
        backgroundColor: colors.greenAccent[500],
        color: colors.grey[100],
        fontWeight: "bold",
        padding: "10px 20px",
        width: "150px",
      }}
    >
      Turnover Reports
    </Button>
  </Box>


        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Monthly Details
              </Typography>
              
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
