import React, { useState, useEffect } from "react";
import CustomDrawer from "@mui/material/Drawer";
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LayersIcon from "@mui/icons-material/Layers";
import {
  ChevronLeft,
  DesignServicesOutlined,
  PhonelinkOutlined,
  InventoryOutlined,
  MobileFriendlyOutlined,
  CloudQueueOutlined,
  PolylineOutlined,
  Diversity1Outlined,
  HomeRounded,
  PersonSearchRounded,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import FlexBetween from "./FlexBetween";
import { useDisableScrolling } from "../custom_hooks/useDisableScrolling";

const serviceItems = [
  {
    text: "Web Design",
    icon: <DesignServicesOutlined />,
  },
  {
    text: "Custom Web Development",
    icon: <PhonelinkOutlined />,
  },
  {
    text: "Inventry Management",
    icon: <InventoryOutlined />,
  },
  {
    text: "Mobile Application",
    icon: <MobileFriendlyOutlined />,
  },
  {
    text: "Cloud Services",
    icon: <CloudQueueOutlined />,
  },
  {
    text: "Logo Design",
    icon: <PolylineOutlined />,
  },
  {
    text: "Digital Marketing",
    icon: <Diversity1Outlined />,
  },
];

const Drawer = ({ Logo }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [active, setActive] = useState("");
  const isNonMobile = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useDisableScrolling(openDrawer); // Use the custom hook here

  useEffect(() => {
    const parts = pathname.split("/"); // Split the pathname by '/'
    const lastPart = parts[parts.length - 1]; // Get the last part of the URL
    setActive(lastPart);
    window.scrollTo(0, 0);
  }, [pathname]);

  const isHomePage = () => {
    return pathname === "/";
  };
  const isAboutPage = () => {
    return pathname === "/about";
  };

  const isServicesPage = () => {
    return pathname.startsWith("/services"); // Check if the current path starts with "/services"
  };

  return (
    <>
      <CustomDrawer
        open={openDrawer}
        disableScrollLock={true}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <Box width="100%">
          <Box m="1rem 0rem 0.5rem 1rem">
            <FlexBetween>
              <Box display="flex" alignItems="center" gap="0.5rem">
                <a href="/">
                  <img className="h-custom-1" src={Logo} alt="webybuild-icon" />
                </a>
              </Box>
              {!isNonMobile && (
                <IconButton
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  <ChevronLeft />
                </IconButton>
              )}
            </FlexBetween>
          </Box>

          <Box>
            <List>
              <ListItem>
                <Button
                  onClick={() => {
                    navigate(`/`);
                    setOpenDrawer(!openDrawer);
                  }}
                  variant="outlined"
                  startIcon={<HomeRounded sx={{ marginBottom: "4px" }} />}
                  sx={{
                    color: isHomePage() ? "#ab4c8a" : "#787878",
                    border: "none",
                    justifyContent: "center",

                    "&:hover": {
                      color: "#ab4c8a",
                      border: "none",
                    },
                  }}
                >
                  Home
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => {
                    navigate(`/about`);
                    setOpenDrawer(!openDrawer);
                  }}
                  variant="outlined"
                  startIcon={
                    <PersonSearchRounded sx={{ marginBottom: "3px" }} />
                  }
                  sx={{
                    color: isAboutPage() ? "#ab4c8a" : "#787878",
                    border: "none",
                    justifyContent: "center",

                    "&:hover": {
                      color: "#ab4c8a",
                      border: "none",
                    },
                  }}
                >
                  About
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  // onClick={handleClick}
                  variant="outlined"
                  startIcon={<LayersIcon />}
                  sx={{
                    color: isServicesPage() ? "#ab4c8a" : "#787878",
                    justifyContent: "center",
                    border: "none",
                    "&:hover": {
                      color: "#ab4c8a",
                      border: "none",
                    },
                  }}
                >
                  Services
                </Button>
              </ListItem>
              <ListItem sx={{ flexDirection: "column" }}>
                {serviceItems.map(({ text, icon }) => {
                  const lcText = text.toLowerCase().replace(/ /g, "-");
                  // console.log("lcText:", lcText);
                  // console.log("active:", active);
                  return (
                    <ListItem
                      onClick={() => {
                        navigate(`/services/${lcText}`);
                        setActive(lcText);
                        setOpenDrawer(!openDrawer);
                      }}
                      key={text}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? "#c2c3cb4d!important"
                            : "transparent",
                        justifyContent: "center",
                        "& .MuiListItemIcon-root": {
                          minWidth: "24px",
                          marginRight: "8px",
                          // color: "#ab4c8a",
                        },
                        "& .MuiTypography-root": {
                          width: "100%",
                          fontSize: "14px",
                        },
                        "&:hover": {
                          backgroundColor: "#0830ff4d !important",
                          // transform: "translateX(10px)",
                          // color: "red",
                        },
                        // transition: "transform 0.3s ease-in-out",
                        "&:focus": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ListItemIcon
                      // sx={{
                      //   color: active === lcText ? "red!important" : "grey",
                      // }}
                      >
                        {icon}
                      </ListItemIcon>
                      <Typography
                        variant="subtitle1"
                        color="#000000"
                        fontSize="14px"
                        // sx={{
                        //   // color: active === lcText ? "red!important" : "grey",
                        //   backgroundImage:
                        //     active === lcText
                        //       ? "linear-gradient(to right, #ef4949 -1%, #5250E1 76%)"
                        //       : "linear-gradient(to right, #757575 -1%, #757575 76%)",
                        //   WebkitBackgroundClip: "text",
                        //   backgroundClip: "text",
                        //   color: "transparent",
                        // }}
                      >
                        {text}
                      </Typography>
                    </ListItem>
                  );
                })}
              </ListItem>
            </List>
          </Box>
        </Box>
      </CustomDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default Drawer;
