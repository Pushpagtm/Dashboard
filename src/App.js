
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
// import Users from './pages/Users';
import Messages from './pages/Messages';
import Analytics from './pages/Analytics';
import FileManager from './pages/FileManager';
import Order from './pages/Order';
import Setting from './pages/Setting';
import PageSidebar from './Components/Sidebar/PageSidebar';
import Service from './pages/Service';
import Navbar from './Components/Navbar/Navbar';
import UserView from './Components/dataTable/UserView';
import Users from './pages/Users';
import {userInputs } from './formSource';
import NewUser from './pages/NewUser';
import Products from './pages/Products';
import Profile from './pages/Profile';
function App() {
  return (
    <>
    <Router>
     <PageSidebar>
      <Navbar/>
     <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/file-manager' element={<FileManager/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/settings' element={<Setting/>}/>
        <Route path='/users/userView' element={<UserView/>}/>
        <Route path='users/new' element={<NewUser inputs={userInputs}/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/profile' element={<Profile/>}/>
        
        
        <Route path='*' element={<>not found </>}/>
      </Routes>
     
     </PageSidebar>
    </Router>
      
     
      
    </>
  );
}

export default App;
