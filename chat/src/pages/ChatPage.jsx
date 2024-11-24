import { addDoc, collection, onSnapshot, serverTimestamp, query, orderBy, where } from "firebase/firestore"
import {auth, db} from './../firebase/config'
import { useEffect, useState } from "react"
import Message from "../components/Message"

const ChatPage = ({room ,setRoom}) => {

    const [messages, setMessages] = useState([])

    
  const handleSubmit =async (e) =>{
    e.preventDefault()

 //kolleksiyonun referansini almak

 const messagesCol = collection(db, 'messages')

   //koleksiyona yeni dokuman ekle

  await addDoc(messagesCol, {
    text:e.target[0].value,
    room,
    author:{
        name:auth.currentUser?.displayName,
        id: auth.currentUser?.uid,
        photo: auth.currentUser?.photoURL,
    },
    //!veritabaninin zamani suanki degil
    createdAt:serverTimestamp(), 
 
     
   })

    // firebase'de mesaj gönderme
    
   //  console.log(text)

   //!fORMU SIFIRLA

   e.target.reset();

}

//!Odalara eklenilen mesajlari anlik olarak getir.
useEffect(()=>{

    const messagesCol = collection(db, 'messages')

//fitreleme ayarlari Yap

const q = query(messagesCol, where('room', '==', room),orderBy('createdAt', 'asc'))
   



//!Anlik olarak guncellemeleri alir degisimleri izler
//!snapshot fomksiyonu ise ekran goutuntusu fonksiyonu verileri alan isci
    onSnapshot(q,(snapshot)=>{
   
  //Verilerin gecici olarak tutuldugu dizi
const tempMsg =[]

        //console.log('SNAPSHOT', snapshot.docs[0].data()) 
        //!.data cok onemli 

        //dokumanlari don veriye eris diziye aktar
        snapshot.docs.forEach((doc) => {
            tempMsg.push(doc.data())
        })
         //mesajlari state aktar
        setMessages(tempMsg)
    })
           
},[])



  return (
    <div className="chat-page">
        
        <header>
            <p>{auth.currentUser?.displayName}</p>
            <p>{room}</p>
            <button onClick={()=> setRoom(null)}>Farklı Oda</button>
        </header>

        <main>{messages.map((data, i)=> <Message data={data} key={i} /> )}</main>

        <form onSubmit={handleSubmit}>
            <input required placeholder="mesajınızı yazınız" type="text" />
            <button>Gönder</button>
        </form>
        
        </div>
  )
}
export default ChatPage