import React, { useState, useEffect } from "react";
import CustomDrawer from "@mui/material/Drawer";
import {
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
  EditNoteSharp,
  TrendingUp,
  SupportAgent,
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
    text: "Web Development",
    icon: <PhonelinkOutlined />,
  },
  {
    text: "Inventory Management",
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

  const isBlogPage = () => {
    return pathname === "/blog";
  };
  const isGrowthPage = () => {
    return pathname === "/growth";
  };
  const isContactsPage = () => {
    return pathname === "/contacts";
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
              <ListItem sx={{ padding: "4px 16px" }}>
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
                    fontWeight: "300",
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
              <ListItem sx={{ padding: "4px 16px", marginBottom: "15px" }}>
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
                    fontWeight: "300",
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
              <Divider
                sx={{
                  color: isServicesPage() ? "#ab4c8a" : "#787878",
                  justifyContent: "center",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "300",
                  "&:hover": {
                    // color: "#ab4c8a",
                    border: "none",
                  },
                }}
              >
                SERVICES
              </Divider>
              {/* <Divider variant="middle" /> */}
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
                        justifyContent: "center",
                        padding: "5px 16px",
                        "& .MuiListItemIcon-root": {
                          minWidth: "24px",
                          marginRight: "15px",
                        },
                        "& .MuiTypography-root": {
                          width: "100%",
                          fontSize: "14px",
                          fontWeight: "300",
                        },
                        "&:hover": {
                          backgroundColor: "#f7f7f8f2!important",
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
                        sx={{
                          color: active === lcText ? "#ab4c8a" : "#787878",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <Typography
                        // variant="subtitle1"
                        color="#000000"
                        sx={{
                          color: active === lcText ? "#ab4c8a" : "#787878",
                          // textTransform: "uppercase",
                        }}
                      >
                        {text}
                      </Typography>
                    </ListItem>
                  );
                })}
              </ListItem>
              <Divider variant="middle" sx={{ marginTop: "5px" }} />
              <ListItem sx={{ padding: "4px 16px", marginTop: "15px" }}>
                <Button
                  onClick={() => {
                    navigate(`/blog`);
                    setOpenDrawer(!openDrawer);
                  }}
                  variant="outlined"
                  startIcon={
                    <EditNoteSharp sx={{ fontSize: "27px !important" }} />
                  }
                  sx={{
                    color: isBlogPage() ? "#ab4c8a" : "#787878",
                    fontWeight: "300",
                    border: "none",
                    justifyContent: "center",

                    "&:hover": {
                      color: "#ab4c8a",
                      border: "none",
                    },
                  }}
                >
                  Blogs
                </Button>
              </ListItem>
              <ListItem sx={{ padding: "4px 16px" }}>
                <Button
                  onClick={() => {
                    navigate(`/growth`);
                    setOpenDrawer(!openDrawer);
                  }}
                  variant="outlined"
                  startIcon={
                    <TrendingUp sx={{ fontSize: "27px !important" }} />
                  }
                  sx={{
                    color: isGrowthPage() ? "#ab4c8a" : "#787878",
                    fontWeight: "300",
                    border: "none",
                    justifyContent: "center",

                    "&:hover": {
                      color: "#ab4c8a",
                      border: "none",
                    },
                  }}
                >
                  Growth
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  onClick={() => {
                    navigate(`/contacts`);
                    setOpenDrawer(!openDrawer);
                  }}
                  variant="outlined"
                  startIcon={
                    <SupportAgent sx={{ fontSize: "25px !important" }} />
                  }
                  sx={{
                    color: isContactsPage() ? "#ab4c8a" : "#787878",
                    fontWeight: "300",
                    border: "none",
                    justifyContent: "center",

                    "&:hover": {
                      color: "#ab4c8a",
                      border: "none",
                    },
                  }}
                >
                  Contacts
                </Button>
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
