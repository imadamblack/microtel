import { createContext, useContext, useState } from 'react';

const SedeSelectorContext = createContext();

export function SedeSelectorProvider({ children }) {
  const [openSedeSelector, setOpenSedeSelector] = useState(false);

  return (
    <SedeSelectorContext.Provider value={{ openSedeSelector, setOpenSedeSelector }}>
      {children}
    </SedeSelectorContext.Provider>
  );
}

export function useSedeSelector() {
  return useContext(SedeSelectorContext);
}