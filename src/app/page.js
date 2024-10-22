"use client"

import * as React from "react"
import App from "@/app/index";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {clientId} from "@/lib/constants";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function () {
  return <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={clientId}>
      <App/>
    </GoogleOAuthProvider>
  </QueryClientProvider>
}
