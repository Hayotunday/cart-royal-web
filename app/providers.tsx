"use client";

import React, { ReactNode, useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
