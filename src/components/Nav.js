import { useEffect, useState } from "react";
import LayersIcon from "@mui/icons-material/Layers";
import logo from "../assets/images/logo/newLogo.png";
import {
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  Typography,
  ListItemIcon,
} from "@mui/material";
import {
  ArrowDropDownOutlined,
  EditNoteSharp,
  DesignServicesOutlined,
  PhonelinkOutlined,
  InventoryOutlined,
  MobileFriendlyOutlined,
  CloudQueueOutlined,
  PolylineOutlined,
  Diversity1Outlined,
  TrendingUp,
  HomeRounded,
  PersonSearchRounded,
} from "@mui/icons-material";
import Drawer from "./Drawer";
import { useLocation, useNavigate } from "react-router-dom";
import Headroom from "react-headroom";

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

function Nav() {
  const [isSticky, setIsSticky] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const [isRotated, setIsRotated] = useState(false);

  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsRotated(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsRotated(false);
  };

  const handleScroll = () => {
    if (window.scrollY > 5) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isSticky
    ? "sticky top-0 transition-all duration-300 ease-in-out"
    : "sticky top-0 shadow-lg transition-all duration-300 ease-in-out";

  const isNonMobile = useMediaQuery("(min-width: 1028px)");

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
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
  const isContactPage = () => {
    return pathname === "/contacts";
  };

  const isServicesPage = () => {
    return pathname.startsWith("/services"); // Check if the current path starts with "/services"
  };

  return (
    <>
      {isNonMobile ? (
        <div
          className={`container flex justify-between w-full rounded-none md:w-10/12 mx-auto md:rounded-xl bg-[#ffffffd0] backdrop-blur-md z-10 ${navbarClass}`}
        >
          <div className="flex px-4 py-1">
            <a href="/">
              <img className="h-[50px]" src={logo} alt="webybuild-icon" />
            </a>
          </div>
          <div className="flex items-center text-custom-1">
            <div>
              <Button
                onClick={() => {
                  navigate(`/`);
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
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate(`/about`);
                }}
                variant="outlined"
                startIcon={<PersonSearchRounded sx={{ marginBottom: "3px" }} />}
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
            </div>
            <div onMouseLeave={handleClose}>
              <Button
                // onClick={handleClick}
                onMouseEnter={handleClick}
                variant="outlined"
                startIcon={<LayersIcon />}
                sx={{
                  color: isServicesPage() ? "#ab4c8a" : "#787878",
                  border: "none",
                  "&:hover": {
                    color: "#ab4c8a",
                    border: "none",
                  },
                }}
              >
                Services
                <ArrowDropDownOutlined
                  sx={{
                    fontSize: "25px",
                    transform: isRotated ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: () => handleClose() }}
                disableScrollLock={true}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                sx={{
                  "& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper": {
                    width: "250px",
                    marginLeft: "-50px",
                    top: "68px !important",
                  },
                }}
              >
                {serviceItems.map(({ text, icon }) => {
                  const lcText = text.toLowerCase().replace(/ /g, "-");
                  // console.log("lcText:", lcText);
                  // console.log("active:", active);
                  return (
                    <MenuItem
                      onClick={() => {
                        navigate(`/services/${lcText}`);
                        handleClose();
                        setActive(lcText);
                      }}
                      key={text}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? "#eaeaea !important"
                            : "transparent",
                        justifyContent: "center",
                        "& .MuiListItemIcon-root": {
                          minWidth: "24px",
                          marginRight: "8px",
                          color: "#ab4c8a",
                        },
                        "& .MuiTypography-root": {
                          width: "100%",
                          fontSize: "14px",
                        },
                        "&:hover": {
                          backgroundColor: "#eaeaea !important",
                          // transform: "translateX(10px)",
                          // color: "red",
                        },
                        // transition: "transform 0.3s ease-in-out",
                        "&:focus": {
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      <ListItemIcon>{icon}</ListItemIcon>
                      <Typography
                        variant="subtitle1"
                        color="#787878"
                        fontSize="14px"
                      >
                        {text}
                      </Typography>
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate(`/blogs`);
                }}
                variant="outlined"
                startIcon={
                  <EditNoteSharp sx={{ fontSize: "27px !important" }} />
                }
                sx={{
                  color: "#ab4c8a",
                  border: "1px solid #b6b6b6",
                  "&:hover": {
                    backgroundColor: "#ab4c8a0f",
                    borderColor: "white",
                  },
                }}
              >
                Blogs
              </Button>
            </div>
            <div>
              <Button
                variant="outlined"
                startIcon={<TrendingUp sx={{ fontSize: "27px !important" }} />}
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  fontWeight: "bolder",
                  fontSize: "0.786rem",
                  margin: "0px 10px",
                  "&:hover": {
                    backgroundColor: "#ab4c8a",
                    borderColor: "white",
                  },
                }}
              >
                Growth
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate(`/contacts`);
                }}
                variant="outlined"
                sx={{
                  color: isContactPage() ? "#ab4c8a" : "#787878",
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
            </div>
          </div>
        </div>
      ) : (
        <Headroom>
          <div
            className={`container flex justify-between w-full rounded-none md:w-10/12 mx-auto md:rounded-xl bg-white z-10 ${navbarClass}`}
          >
            <div className="flex px-4 py-1">
              <a href="/">
                <img className="h-custom-1" src={logo} alt="webybuild-icon" />
              </a>
            </div>

            <Drawer Logo={logo} />
          </div>
        </Headroom>
      )}
    </>
  );
}

export default Nav;
