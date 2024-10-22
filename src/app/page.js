"use client"

import * as React from "react"
import App from "@/app/index";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {clientId} from "@/lib/constants";

export default function () {
  return <GoogleOAuthProvider clientId={clientId}>
    <App/>
  </GoogleOAuthProvider>
}
