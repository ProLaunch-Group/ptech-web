'use client';

import React, { createContext, useContext, useState } from 'react';

interface AIQualifierContextType {
  openWidget: boolean;
  openAIQualifier: () => void;
  closeAIQualifier: () => void;
}

const AIQualifierContext = createContext<AIQualifierContextType | undefined>(
  undefined
);

export function AIQualifierProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openWidget, setOpenWidget] = useState<boolean>(false);

  const openAIQualifier = () => setOpenWidget(true);
  const closeAIQualifier = () => setOpenWidget(false);

  return (
    <AIQualifierContext.Provider
      value={{ openWidget, openAIQualifier, closeAIQualifier }}
    >
      {children}
    </AIQualifierContext.Provider>
  );
}

export function useAIQualifier() {
  const context = useContext(AIQualifierContext);
  if (!context) {
    throw new Error(
      'useAIQualifier must be used within an AIQualifierProvider'
    );
  }
  return context;
}
