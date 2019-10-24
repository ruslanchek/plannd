import React, { useState } from 'react';
import { AddTransactionModal } from './AddTransactionModal';

interface IAddTransactionModalContext {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const AddTransactionModalContext = React.createContext<IAddTransactionModalContext>({
  show: false,
  setShow: () => {},
});

export const AddTransactionModalProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <AddTransactionModalContext.Provider
      value={{
        show,
        setShow,
      }}>
      {children}
    </AddTransactionModalContext.Provider>
  );
};
