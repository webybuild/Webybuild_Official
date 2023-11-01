import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import GetInTouch from "./GetInTouch";
import HeadTitle from "./HeadTitle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Slide
      in={value === index}
      direction="left"
      timeout={{ enter: 1000, exit: 1000 }}
    >
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`horizontal-tabpanel-${index}`}
        aria-labelledby={`horizontal-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </Box>
    </Slide>
  );
}

export default function ResponsiveVerticalTabs() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <HeadTitle
        titleOne="Industries"
        highlight="We"
        titleTwo="Serve"
        subTitle="We partner with fast-growing companies, offering dedicated teams for cutting-edge software solutions."
        id="industry"
      />
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: isMobile ? "block" : "flex",
          justifyContent: "center",
          flexDirection: isMobile ? "column" : "row",
          height: isMobile ? "auto" : "auto", // Adjust the height as needed
          overflowY: isMobile ? "auto" : "unset", // Enable scroll for mobile screens
          marginBottom: "3rem",
        }}
      >
        {isMobile ? (
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            TabIndicatorProps={{
              sx: {
                backgroundImage:
                  "linear-gradient(to top, #f73636  -6%, #5250E1 100%)",
              },
            }}
            sx={{
              borderRight: 1,
              borderColor: "#e3e3e3",
              "& .css-lfwcke-MuiTabs-flexContainer": {
                gap: "0.3rem",
                // color: "red",
              },
              "& .Mui-selected": {
                fontWeight: "bold",
                border: "0.5px solid #ffebeb",
                boxShadow: "2px 3px 6px -4px #808080e3",
                backgroundImage:
                  "linear-gradient(to right, #ef4949 -1%, #5250E1 76%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent !important",
              },
            }}
          >
            <Tab label="Education" />
            <Tab label="Healthcare" />
            <Tab label="Software & IT" />
            <Tab label="Real Estate" />
            <Tab label="Finance" />
            <Tab label="Logistics" />
            <Tab label="Media & Entertainment" />
            <Tab label="Hospitality" />
          </Tabs>
        ) : (
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            TabIndicatorProps={{
              sx: {
                backgroundImage:
                  "linear-gradient(to top, #f73636  -6%, #5250E1 100%)",
              },
            }}
            sx={{
              borderRight: 1,
              borderColor: "#e3e3e3",
              ".css-lfwcke-MuiTabs-flexContainer ": {
                gap: "0.3rem",
                // color: "red",
              },
              "& .Mui-selected": {
                fontWeight: "bold",
                border: "0.5px solid #ffebeb",
                boxShadow: "2px 3px 6px -4px #808080e3",
                backgroundImage:
                  "linear-gradient(to right, #ef4949 -1%, #5250E1 76%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent !important",
              },
            }}
          >
            <Tab label="Education" />
            <Tab label="Healthcare" />
            <Tab label="Software & IT" />
            <Tab label="Real Estate" />
            <Tab label="Finance" />
            <Tab label="Logistics" />
            <Tab label="Media & Entertainment" />
            <Tab label="Hospitality" />
          </Tabs>
        )}
        <Box className="flex justify-center w-full md:w-3/4">
          <Box className="">
            <TabPanel value={value} index={0}>
              <Box
                className={`flex flex-col lg:flex-row justify-center gap-16 items-center px-4 lg:px-12 text-center lg:text-left`}
              >
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Revolutionize e-Learning with Top-Tier Edtech Solutions
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    We're here to make a real impact, Our mission is to provide
                    top-tier eLearning software solutions that truly resonate
                    with forward-thinking Edtech companies. Our goal? To enhance
                    user experiences and achieve important educational
                    objectives. Leveraging our deep understanding of the
                    education industry and technical expertise, we're dedicated
                    to supporting EduTech leaders worldwide.
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/hl8z3tx5c255tnevrk5dr/education.png?rlkey=b8ayhq6lcyl00y7ugy1yw0hb3&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Enhance Healthcare Operations with Tailored Healthcare
                    Software Solutions
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    Whether you're in need of a tailored healthcare application,
                    an engaging EMR system, cutting-edge business software that
                    addresses your specific challenges, or advanced analytics
                    solutions, we've got you covered. Our healthcare solutions
                    are meticulously crafted to align with regulatory
                    requirements and ensure robust data privacy protection.
                    Leverage our proven expertise in healthcare software
                    development to boost and optimize your business operations.
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/35tpfxjscukoomhzpu55y/health2.png?rlkey=jvl61ahqpas9lyq54nfih6pn1&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Strategic IT Consulting Services for Sustainable Business
                    Success
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    As a smart and Agile software company, we provide
                    full-service IT consulting services to overcome the biggest
                    business obstacles, enabling long-term business success at
                    scale. Whether you’re modernizing your IT strategy, looking
                    to build a SaaS product, modernizing your legacy systems, or
                    recovering from a software project, our proven software
                    developers have you covered.
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/1mekgxd5r31juaf2f1gq3/software.jpg?rlkey=d2clg3bvpkd72mhnpm4fqnhlf&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Stay Competitive: Real Estate Transformation through
                    Technology
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    At Webybuild, we specialize in crafting tailor-made software
                    solutions, notably ERP and CRM systems. Our cutting-edge
                    solutions have proven instrumental in revolutionizing the
                    real estate industry. By digitizing and optimizing
                    operational processes, we empower businesses to achieve
                    unparalleled growth and efficiency. Our commitment to
                    excellence ensures that we not only meet but exceed our
                    clients' expectations, enabling them to thrive in a highly
                    competitive market
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/zgrynhmg6df5lduay3ohk/realestate2.png?rlkey=cq7cbqpg58q95w7ncafozml9u&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Enabling Financial Institutions to Thrive with Custom
                    Software
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    Since our inception, we've been dedicated to offering
                    top-tier banking and financial software services to fintech
                    companies, financial institutions, and banks. Our mission is
                    to facilitate their digital transformation journey and
                    provide them with the tools needed to deliver seamless,
                    exceptional experiences to both their customers and internal
                    teams. With a relentless commitment to excellence, we
                    empower these organizations to thrive in the ever-evolving
                    financial landscape.
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/b1o2rkoxbenxjxdksvgpf/finance.jpg?rlkey=lfwqrbe2wdq1ci307vlhygj8o&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Reducing Logistics Costs with Custom Software Solutions
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    Our comprehensive custom software development services
                    revolve around Consulting, Deployment, Support, and the
                    Development of cutting-edge Logistics and Transportation
                    Solutions. Our primary objective is to partner with
                    Logistics and Transportation (L&T) businesses, helping them
                    streamline operations, reduce logistics costs, optimize
                    asset productivity, and elevate the overall customer
                    experience. We are committed to empowering L&T enterprises
                    to achieve operational excellence and stay ahead in their
                    industry.
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/m3dzsdwqalyehqihdtgd0/log2.png?rlkey=srtjmj8ny5t4lpdn7rw0jgyn3&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Unleash the Potential of Your Media and Entertainment
                    Ventures
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    Leverage our specialized custom software development
                    services in New York to propel your business to new heights.
                    Harness the power of tailored Media & Entertainment
                    solutions that are strategically designed to be
                    mission-critical. These solutions are geared towards
                    boosting viewer engagement, modernizing your operational
                    processes, and ultimately enhancing your bottom line.
                    Partner with us to unlock the full potential of your media
                    and entertainment endeavors.
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/v41vncj5wowmog0o2639i/media2.png?rlkey=mdp0kt3jyemnfpx3r7q0rs8ue&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={7}>
              <Box className="flex flex-col lg:flex-row justify-center gap-16 items-center text-center lg:text-left px-4 lg:px-12">
                <Box className="flex-1">
                  <Typography
                    variant="body1"
                    className="text-base md:text-xl mb-6 font-semibold text-black drop-shadow-md uppercase"
                  >
                    Optimize Your Hospitality Operations with Our Suite of
                    Offerings
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-light text-sm text-justify sm:text-base"
                  >
                    Explore our comprehensive range of travel and hospitality
                    software products tailored to meet your customers' demands.
                    Whether you require fully-automated migration solutions or
                    custom software integration, we stand as your trusted
                    partner for enhancing the efficiency and profitability of
                    your hospitality business. With our suite of offerings, we
                    enable you to provide exceptional experiences to your
                    clients while optimizing your operations for success
                  </Typography>
                </Box>
                <Box className="flex-1">
                  <img
                    className="w-full h-full border drop-shadow-md"
                    src="https://dl.dropboxusercontent.com/scl/fi/fvnex18zre6dttpuhjagh/hospitality.png?rlkey=f79rc8khvpbr8brlsl98m4br6&dl=0"
                    alt=""
                    srcSet=""
                  />
                </Box>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Box>
      <GetInTouch
        title="Not Seeing Your Industry Listed Here?"
        para="Don’t worry we are here for you!"
        paratwo="Contact us with different medium whatsapp, call or mail, We are open."
        but="CONNECT WITH US NOW"
      />
    </>
  );
}
