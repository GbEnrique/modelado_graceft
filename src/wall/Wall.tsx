import React from "react";

interface WallProps {
  width?: string;
  height?: string;
  rotate?: number;
  backgroundColor?: string;
  marginLeft?: string;
  marginTop?: string;
}
export default function Wall(props: WallProps) {
  const {
    width = "100%",
    height = "10px",
    backgroundColor = "black",
    rotate = 90,
  } = props;
  return (
    <div
      style={{
        ...(props as any),
        width: width,
        height: height,
        backgroundColor: backgroundColor,
        transform: `rotate(${rotate}deg)`,
      }}
    ></div>
  );
}
