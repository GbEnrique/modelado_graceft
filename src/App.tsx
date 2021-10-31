import React, { useContext } from "react";

import "./App.css";

import Wall from "./wall/Wall";
import InfoCar from "./infoCar/InfoCar";
import Switch from "@mui/material/Switch";
import { Box, Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

import ContainerCar from "./containerCar/ContainerCar";
import UserContext from "./context/UserContext";

const label = { inputProps: { "aria-label": "Switch demo" } };

function App() {
  const state = useContext(UserContext);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          backgroundColor: "orange",
          width: "100%",
          position: "relative",
        }}
      >
        <Typography variant="h3" gutterBottom component="div">
          automoviles en reposo
        </Typography>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            paddingTop: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              pulsador
            </Typography>

            <Switch
              {...label}
              value={false}
              onChange={(value) => {
                state.handleChangeEnc(!state.enc);
              }}
            />
          </Box>

          <div className="wrapper">
            <Box className={"one"}>
              <InfoCar
                width="100px"
                info="reposos de car1 y car2"
                type={0}
                color="blue"
                marginTop={-60}
                marginLeft={120}
                height={"100px"}
              />
            </Box>

            <Box className={"six"}>
              <Wall
                rotate={180}
                height={"2px"}
                marginLeft={"100px"}
                width="50%"
              />
            </Box>

            <Box className={"two"}>
              <div className="wrapper1">
                <Box className={"one1"}>
                  <InfoCar
                    info="car2 der"
                    type={1}
                    color="green"
                    height={"100px"}
                    marginTop={-30}
                    marginLeft={-40}
                  />
                </Box>
                <Box className={"two2"}>
                  <InfoCar
                    info="car1 der"
                    type={2}
                    color="green"
                    height={"100px"}
                    marginTop={-30}
                    marginLeft={60}
                  />
                </Box>

                <Box className={"three3"}>
                  <InfoCar
                    info="car1 esp"
                    type={3}
                    color="green"
                    height={"100px"}
                    marginTop={-25}
                    marginLeft={-40}
                  />
                </Box>
                <Box className={"four4"}>
                  <InfoCar
                    info="car2 lleg"
                    type={4}
                    color="green"
                    height={"100px"}
                    marginTop={-25}
                    marginLeft={60}
                  />
                </Box>
              </div>
            </Box>

            <Box className={"three"} style={{ position: "relative" }}>
              <div className="wrapper1">
                <Box className={"one1"}>
                  <InfoCar
                    info="car1 izq"
                    type={5}
                    color="green"
                    height={"100px"}
                    marginTop={-30}
                    marginLeft={-40}
                  />
                </Box>
                <Box className={"two2"}>
                  <InfoCar
                    info="car2 izq"
                    type={6}
                    color="green"
                    height={"100px"}
                    marginTop={-30}
                    marginLeft={60}
                  />
                </Box>

                <Box className={"three3"}>
                  <InfoCar
                    info="car1 esp"
                    type={7}
                    color="green"
                    height={"100px"}
                    marginTop={-25}
                    marginLeft={-40}
                  />
                </Box>
                <Box className={"four4"}>
                  <InfoCar
                    info="car2 lleg"
                    type={8}
                    color="green"
                    height={"100px"}
                    marginTop={-25}
                    marginLeft={60}
                  />
                </Box>
              </div>
            </Box>

            <Box className={"four"}>
              <Wall
                rotate={180}
                height={"2px"}
                marginLeft={"100px"}
                marginTop={"40px"}
                width="50%"
              />
            </Box>
            <Box className={"seven"}>
              {/* <Wall rotate={180} height={"2px"} marginLeft={"-40px"} /> */}
            </Box>
          </div>
        </Container>
        <div className="wrapper3" />
        <Divider flexItem sx={{ marginTop: 18 }} />

        <ContainerCar velocity={0.2} />
        <ContainerCar infoStart={"C"} infoEnd={"D"} />
      </div>
    </div>
  );
}

export default App;
