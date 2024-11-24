import { auth } from "../firebase/config";

const Message = ({ data }) => {
  //eger ki oturumu acik olan kisinin id si kisinin id si ile eslenirse
  if (auth.currentUser?.uid === data.author.id) {
    return <p className="msg-user">{data.text}</p>;
  }

  //    console.log(auth.current.uid)

  //id eslesmezse bunu yaz
  return (
    <div style={{display:'flex', alignItems:'center', gap:'5px', color:'white'}} className="msg-other">
      <p style={{display:'flex', alignItems:'center', gap:'5px'}} className="user-info">
        <img
          style={{ width: "40px", borderRadius: "50px" }}
          src={data.author.photo}
          alt="profil"
        />
        <span style={{fontWeight:'bold'}}>{data.author.name}</span>
      </p>

      <p className="msg-text">{data.text} </p>
    </div>
  );
};
export default Message;
