import './styles/style.scss';
import AuthPage from "./pages/AuthPage";
import { useState } from 'react';
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';

const App = () => {

  //!bu sayaede sayfayi yeniledigimizde tekrar ayni sayfada kalabiliyuruz
  const[isAuth, setIsAuth]= useState(localStorage.getItem('TOKEN')) 

  const[room ,setRoom] =useState(null)


  //yetkisi yoksa > giris sayfasi
  if (!isAuth){
    return <AuthPage setIsAuth={setIsAuth} />
  }

 //console.log(room)

  // yetkisi varsa 




  return<div className='container'>

    {room ? (
      //oda seciliyse  > sohbet sayfasi
      <ChatPage room={room} setRoom={setRoom} />
    ) : (
      //oda secili degilse > oda secme sayfasi
      <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />) }
    
   
    
    </div>
}
export default App