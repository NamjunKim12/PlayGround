
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [ data, setData ] = useState(null);
  const oAuthURL = 
  `https://accounts.google.com/o/oauth2/v2/auth?client_id=946916753815-sme09oj9iqieo2lbf6837j4qdp3h50s6.apps.googleusercontent.com&response_type=token&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid`
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  }

  useEffect( () => {
    const url = new URL(window.location.href);
    const hash = url.hash;

    async function fetchData() {
      if (hash) {
      const accessToken = hash?.split("=")[1].split("&")[0];
      await axios.get('https://www.googleapis.com/oauth2/v2/userinfo?access_token=' + accessToken, { 
        headers: { 
          authorization: `token ${accessToken}`, 
          accept: 'application/json' 
        }})
        .then(data => {
          setData(data);
          console.log(data.data);
      }).catch(e => console.log('oAuth token expired'));

      console.log(accessToken);
    }
  }
    fetchData();


  }, [])

  return (
    <div>
      <button id="oAuthBtn" onClick={oAuthHandler}>
        <div id="comment">구글 OAuth</div>
      </button>
    </div>
  );
}

export default App;