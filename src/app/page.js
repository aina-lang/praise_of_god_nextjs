"use client"
import * as React from "react";
import {NextUIProvider} from "@nextui-org/system";
import Main from "./Main";

export default function App() {
  return (
    <NextUIProvider>
     <Main/>
    </NextUIProvider>
  );
}