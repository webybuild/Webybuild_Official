import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import mui from "../assets/images/Web-Interface/webdesigntechstack/logos_material-ui.svg";
import tail from "../assets/images/Web-Interface/webdesigntechstack/devicon_tailwindcss.svg";
import fig from "../assets/images/Web-Interface/webdesigntechstack/logos_figma.svg";
import boots from "../assets/images/Web-Interface/webdesigntechstack/devicon_bootstrap-wordmark.svg";
import react from "../assets/images/Web-Interface/webdesigntechstack/logos_react.svg";
import css from "../assets/images/Web-Interface/webdesigntechstack/vscode-icons_file-type-css.svg";
import wopress from "../assets/images/Web-Interface/webdesigntechstack/skill-icons_wordpress.svg";
import js from "../assets/images/Web-Interface/webdesigntechstack/skill-icons_javascript.svg";
import jque from "../assets/images/Web-Interface/webdesigntechstack/devicon_jquery-wordmark.svg";
import { useMediaQuery } from "@mui/material";
import HeadTitle from "./HeadTitle";

const icons = [mui, tail, fig, boots, react, css, wopress, js, jque];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function HomeTechTab() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeadTitle
        titleOne="Technologies"
        highlight="We Work"
        titleTwo="With"
        subTitle="We use the latest trending and reliable technologies to develop your project."
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            width: isMobile ? "100%" : "50%",
          }}
        >
          <AppBar position="static">
            {isMobile ? (
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="full width tabs example"
              >
                <Tab label="Web Design" />
                <Tab label="Web Development" />
                <Tab label="Mobile Application" />
                <Tab label="Cloud Services" />
              </Tabs>
            ) : (
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab label="Web Design" />
                <Tab label="Web Development" />
                <Tab label="Mobile Application" />
                <Tab label="Cloud Services" />
              </Tabs>
            )}
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
              {icons.map((icon, number) => (
                <div
                  key={number}
                  className="icon w-8 h-8 md:w-20 md:h-20 lg:w-24 lg:h-24"
                >
                  <img src={icon} alt={"icons"} />
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </Box>
      </Box>
    </>
  );
}
