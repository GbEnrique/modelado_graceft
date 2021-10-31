import { Avatar, Typography } from "@mui/material";
import { cyan } from "@mui/material/colors";
import React from "react";

interface InfoCarProps {
  info: string;
  type: number;
  color: string;
  className?: string;
  width?: string;
  height?: string;
  marginTop?: number;
  marginLeft?: number;
}
function InfoCar(props: InfoCarProps) {
  const { info, color, width = "80%", height = "80%", type = 0 } = props;
  return (
    <div
      style={{
        width: width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
        ...props,
      }}
      {...props}
    >
      <Avatar sx={{ bgcolor: cyan[500] }}>{type}</Avatar>
      <Typography sx={{ fontSize: 18 }} gutterBottom color={"black"}>
        {info}
      </Typography>
    </div>
  );
}

export default InfoCar;
