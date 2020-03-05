import React from 'react';

import { CloudProvider } from './context/CloudState'

// components
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpensess } from './components/IncomeExpensess';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

// CSS 
import './App.css';

// hooks
import useTheme from "./hooks/useTheme";


function App() {
  const { theme, toggleTheme } = useTheme();
  const sun = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDMwMi40IDMwMi40Ij48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMjA0LjggOTcuNkMxOTEuMiA4NCAxNzIgNzUuMiAxNTEuMiA3NS4ycy00MCA4LjQtNTMuNiAyMi40Yy0xMy42IDEzLjYtMjIuNCAzMi44LTIyLjQgNTMuNmE3Ni4zIDc2LjMgMCAwIDAgNzYgNzYgNzYuMyA3Ni4zIDAgMCAwIDc2LTc2YzAtMjAuOC04LjQtNDAtMjIuNC01My42em0tMTQuNCA5Mi44Yy0xMCAxMC0yNCAxNi0zOS4yIDE2cy0yOS4yLTYtMzkuMi0xNi0xNi0yNC0xNi0zOS4yIDYtMjkuMiAxNi0zOS4yIDI0LTE2IDM5LjItMTYgMjkuMiA2IDM5LjIgMTYgMTYgMjQgMTYgMzkuMi02IDI5LjItMTYgMzkuMnpNMjkyIDE0MC44aC0zMC44Yy01LjYgMC0xMC40IDQuOC0xMC40IDEwLjQgMCA1LjYgNC44IDEwLjQgMTAuNCAxMC40SDI5MmM1LjYgMCAxMC40LTQuOCAxMC40LTEwLjQgMC01LjYtNC44LTEwLjQtMTAuNC0xMC40ek0xNTEuMiAyNTAuOGMtNS42IDAtMTAuNCA0LjgtMTAuNCAxMC40VjI5MmMwIDUuNiA0LjggMTAuNCAxMC40IDEwLjQgNS42IDAgMTAuNC00LjggMTAuNC0xMC40di0zMC44YzAtNS42LTQuOC0xMC40LTEwLjQtMTAuNHpNMjU4IDI0My42bC0yMi0yMmMtMy42LTQtMTAuNC00LTE0LjQgMHMtNCAxMC40IDAgMTQuNGwyMiAyMmM0IDQgMTAuNCA0IDE0LjQgMHM0LTEwLjQgMC0xNC40ek0xNTEuMiAwYy01LjYgMC0xMC40IDQuOC0xMC40IDEwLjR2MzAuOGMwIDUuNiA0LjggMTAuNCAxMC40IDEwLjQgNS42IDAgMTAuNC00LjggMTAuNC0xMC40VjEwLjRjMC01LjYtNC44LTEwLjQtMTAuNC0xMC40ek0yNTguNCA0NC40Yy00LTQtMTAuNC00LTE0LjQgMGwtMjIgMjJjLTQgNC00IDEwLjQgMCAxNC40IDMuNiA0IDEwLjQgNCAxNC40IDBsMjItMjJjNC00IDQtMTAuNCAwLTE0LjR6TTQxLjIgMTQwLjhIMTAuNGMtNS42IDAtMTAuNCA0LjgtMTAuNCAxMC40czQuNCAxMC40IDEwLjQgMTAuNGgzMC44YzUuNiAwIDEwLjQtNC44IDEwLjQtMTAuNCAwLTUuNi00LjgtMTAuNC0xMC40LTEwLjR6TTgwLjQgMjIxLjZjLTMuNi00LTEwLjQtNC0xNC40IDBsLTIyIDIyYy00IDQtNCAxMC40IDAgMTQuNHMxMC40IDQgMTQuNCAwbDIyLTIyYzQtNCA0LTEwLjQgMC0xNC40ek04MC40IDY2LjRsLTIyLTIyYy00LTQtMTAuNC00LTE0LjQgMHMtNCAxMC40IDAgMTQuNGwyMiAyMmM0IDQgMTAuNCA0IDE0LjQgMHM0LTEwLjQgMC0xNC40eiIvPjwvc3ZnPg==";
  
  const moon ="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4MCA0ODAiPjxwYXRoIGQ9Ik00NTkuOCAzNDcuM2ExNiAxNiAwIDAgMC0xNy44LTVBMTc2LjIgMTc2LjIgMCAwIDEgMjA4LjcgMTc2YzAtNTguMyAyOC44LTExMi43IDc3LTE0NS40YTE2IDE2IDAgMCAwLTYuNi0yOUMyNzEuNi4zIDI2NCAwIDI1Ni42IDBjLTEzMi4zIDAtMjQwIDEwNy42LTI0MCAyNDBzMTA3LjcgMjQwIDI0MCAyNDBjODQgMCAxNjAuNS00Mi43IDIwNC40LTExNC4yIDMuNi01LjggMy0xMy4yLTEuMi0xOC41eiIvPjwvc3ZnPg==";

  return (
    <div  className={`App ${theme}`}>
      <CloudProvider>
        <Header theme={theme} toggleTheme={toggleTheme} moon={moon} sun={sun}/>
        <div className="container">
          <div className="leftSide">
            <Balance />
            <IncomeExpensess/>
          </div>
          <div className="center">
            <TransactionList/>
          </div>
          <div className="rightSide">
            <AddTransaction />
          </div>
        </div>
      </CloudProvider>
    </div>
  );
}

export default App;
