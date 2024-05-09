"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
  console.log("Client rendered");
  const result = serverSideFunction();
  return (
    <div>
      <h1>Client Route Page</h1>
      <p>{result}</p>
    </div>
  );
}
