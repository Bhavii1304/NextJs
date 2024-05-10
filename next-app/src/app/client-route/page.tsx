"use client";

import { clientSideFunction } from "@/utils/client-utils";
import Image from "next/image";

export default function ClientRoutePage() {
  console.log("Client rendered");
  const result = clientSideFunction();
  return (
    <div>
      <h1>Client Route Page</h1>
      <p>{result}</p>
    </div>
  );
}
