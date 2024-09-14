import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterList from './RouterList';
import Header from './Header';
import './App.css'

export const DataContext = createContext();
const App = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" ,cpassword:""});
  const addData = (e) => {
    let uname = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [uname]: value }));
  };
  let a = "afdg";


  return (
    <BrowserRouter>
      <DataContext.Provider value={{ data, addData }}>


        <div>
          <Header />
          <RouterList />
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
};

export default App;
