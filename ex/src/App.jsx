 
import './App.css';
import { useState } from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import AdminSidebar from './componets/AdminSidebar';
import AdminNav from './componets/AdminNav';
 
function App() {
  const[isActive,setIsActive]=useState(false)
// console.log(window.location.pathname)
// var my_route = window.location.pathname.split('/')[1]
// console.log(my_route)


function mytog () {

    setIsActive(current => !current)
 
};

  return (
    <>
      <BrowserRouter>
<Routes>
<Route path='/' element={<>Hii Admin</>}/>
</Routes>

      {window.location.pathname.split('/')[1]=='admin'?
      <div className="cont"> 
    <AdminSidebar isActive={isActive}/>
      <div className={isActive?"active main mx-1":'main mx-1'}>
  
        <AdminNav mytog={mytog}/>
        <Routes>
          <Route path='/admin' element={<>Hii Admin</>}/>
          <Route path='/admin/a' element={<>Hii  a</>}/>
          <Route path='/admin/b' element={<>Hii  b</>}/>
        </Routes>
        
      </div>
    </div>
    :""}
    

      
      </BrowserRouter>
    </>
  );
}

export default App;
