import './App.css';
import Nav from './components/common/nav';
import { Route,Routes } from 'react-router-dom';
import Home from './components/page/Home';
import Myaccount from './components/page/Myaccount';
import Category from './components/page/Category';
import Footer from './components/common/footer';

function App() {
  // const list = [
  //   {
  //     name:"name1",
  //     price: 1100,
  //     qty: 11
  //   },
  //   {
  //     name:"name2",
  //     price: 1200,
  //     qty: 12
  //   }
  // ]
  return (
  //   <div className="App container">
  //     <div className='row'>
  //    {
  //     list.map((item,key)=>{
  //       return <Product key={key} product={item}/>
  //     })
  //    }
  //   </div>
  // </div>  
  <>
    <Nav/>
    <main>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/category'Component={Category}/>
        <Route path='/my-account' Component={Myaccount}/>
      </Routes>
    </main>
   <Footer/>
  </>
  );
}

export default App;