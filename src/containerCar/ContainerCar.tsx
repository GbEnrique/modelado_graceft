import React, { useContext, useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { cyan } from "@mui/material/colors";
import { Box } from "@mui/system";
import Car2 from "../car/Car2";
import Wall from "../wall/Wall";
import UserContext from "../context/UserContext";

interface ContainerCarProps {
  leftInit?: number;
  velocity?: number;
  infoStart?: string;
  infoEnd?: string;
}

export default function ContainerCar(props: ContainerCarProps) {
  const {
    leftInit = 20,
    velocity = 0.1,
    infoStart = "A",
    infoEnd = "B",
  } = props;
  const [top, setTop] = useState(-62);
  const [left, setLeft] = useState(leftInit);
  const userContext = useContext(UserContext);
  const state = useContext(UserContext);

  useEffect(() => {
    if (state.enc && left <= 850) {
      setLeft(left + velocity);
    } else if (!state.enc && left >= 0) {
      setLeft(left - velocity);
    }
  }, [state, left]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "column",
        position: "relative",
        marginTop: 10,
      }}
    >
      <Car2
        width={"100px"}
        style={{ position: "absolute", top: top, left: left }}
      />

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ bgcolor: cyan[500] }}>{infoStart}</Avatar>
        <Wall rotate={180} width="900px" />
        <Avatar sx={{ bgcolor: cyan[500] }}>{infoEnd}</Avatar>
      </Box>
    </Box>
  );
}
