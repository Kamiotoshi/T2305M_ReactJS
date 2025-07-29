import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/common/nav';
import Home from './components/page/Home';
import Category from './components/page/Category';
import MyAccount from './components/page/Myaccount';
import Detail from './components/page/Detail';
// import STATE from './context/initState';
// import { UserProvider } from './context/context';
// import { useReducer, useState } from 'react';
// import reducer from './context/reducer';
import Login from './components/page/Login';
import Cart from "./components/page/Cart";
//state 
function App() {
  // const data = localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):STATE;
  // const [state,dispatch] = useReducer(reducer,data);
  return (
      // <UserProvider value={{state,dispatch}}>
      <>
        <Nav />
        <main>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/category' Component={Category}/>
            <Route path='/my-account' Component={MyAccount}/>
            <Route path='/product/:id' Component={Detail}/>
            <Route path='/login' Component={Login}/>
              <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </>
      // </UserProvider>
  );
}

export default App;
