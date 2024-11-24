import { auth, provider } from "../firebase/config";
import { signInWithPopup } from "firebase/auth";

const AuthPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
    
    //Giris islemi bsarisiz olursa 
    
    .then((data) => {
        //State guncelle
        setIsAuth(true)
        //token i local de sakla
        localStorage.setItem('TOKEN',data.user.refreshToken) 
    });
  };
  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam Etmek Icin Giris Yapin</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Google ile Gir</span>
        </button>
      </div>
    </div>
  );
};
export default AuthPage;
