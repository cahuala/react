import React from 'react';
type AppSettingsType = {
    handleSetAppHeaderNone: (value: boolean) => void;
    handleSetAppSidebarNone: (value: boolean) => void;
    handleSetAppContentFullHeight: (value: boolean) => void;
    handleSetAppContentClass: (className: string) => void;
  };
  
  // Valor padrão do contexto
  const defaultSettings: AppSettingsType = {
    handleSetAppHeaderNone: () => {},
    handleSetAppSidebarNone: () => {},
    handleSetAppContentFullHeight: () => {},
    handleSetAppContentClass: () => {},
  };
  
  export const AppSettings = React.createContext<AppSettingsType>(defaultSettings);
