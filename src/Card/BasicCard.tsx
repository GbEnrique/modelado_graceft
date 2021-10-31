import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { cyan, deepOrange } from "@mui/material/colors";

interface BasicCardProps {
  info?: string;
  type?: number;
  color?: any;
  marginTop?: number;
  marginLeft?: number;
  className?: any;
  width?: string;
  height?: string;
}
export default function BasicCard(props: BasicCardProps) {
  const { info = "", type = 0, color = deepOrange[500] } = props;
  return (
    <>
      <div
        style={{
          ...props,
        }}
        {...props}
      >
        <Card sx={{ width: 150, bgcolor: color }} variant="elevation">
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              mx: "2px",
            }}
          >
            <Avatar sx={{ bgcolor: cyan[500] }}>{type}</Avatar>
            <Typography sx={{ fontSize: 18 }} gutterBottom color={"white"}>
              {info}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
