import { Suspense, useState } from "react";
import { useNavigate } from "react-router";
import { ROUTE_PATH } from "../routes/routePath";
import Header from "./Header";
import UseComponent from "./UseComponent";
import { api } from "./mockAPI";

function NewPromisePage() {
  console.log("UsePage 리렌더링!");
  // const navigate = useNavigate();
  // const [count, setCount] = useState(0);
  throw new Promise((resolve) => {
    console.log("1");
    setTimeout(() => {
      console.log("2");
      resolve("Mock API Data");
    }, 1000);
  });
}

export default NewPromisePage;
