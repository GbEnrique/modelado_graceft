import React from "react";
import img from "./coche-deportivo.png";

interface CarProps {}
export default function Car(props: CarProps) {
  return (
    <div>
      <img src={img} alt="" width="200px" height="200px" />
    </div>
  );
}
