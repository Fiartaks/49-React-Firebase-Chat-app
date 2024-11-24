const RoomPage = ({setRoom, setIsAuth}) => {

    //!Formun gonderilmesinde calisir
 const handleSubmit =(e)=>{

    e.preventDefault() // Sayfanin yenilenmesini engelledik 

    const room = e.target[0].value

    setRoom(room.toUpperCase())
 }

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz?</p>
      <input placeholder="yaz yav" type="text" />
      <button type="submit">Odaya Gir</button>
     <button onClick={()=>{setIsAuth(false); 
      localStorage.removeItem('token');
     }} type="button">Çıkış Yap</button>
     </form>
  )
}
export default RoomPage