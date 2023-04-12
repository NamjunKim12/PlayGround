import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ data, setData ] = useState(null);
  const oAuthURL = 
  `https://accounts.google.com/o/oauth2/v2/auth?client_id=946916753815-sme09oj9iqieo2lbf6837j4qdp3h50s6.apps.googleusercontent.com&
response_type=token&
redirect_uri=http://localhost:3000&
scope=https://www.googleapis.com/auth/userinfo.profile`
  const oAuthHandler = () => {
    window.location.assign(oAuthURL);
  }
  useEffect(() => {
    const getAccessToken = async () => {
      const url = new URL(window.location.href);
      try {
        if (url.hash) {
          const OauthAccessToken = url.hash.split('=')[1].split('&')[0];
          const response = await axios.post(
            'https://api.dragme.kr/api/auth',
            {
              token: OauthAccessToken,
              provider: 'google',
            },
            {
              withCredentials: true,
            },
          );
          const { accessToken } = response.data.data;
          localStorage.setItem('accessToken', accessToken);
          // TODO : 라우팅 경로 수정
        }
      } catch (err) {
        console.log('비정상적인 접근입니다. 다시 시도해주세요.' + err);
        // router.push('/');
      }
    };
    getAccessToken();

  }, []);

  return (
    <div>
      <button id="oAuthBtn" onClick={oAuthHandler}>
        <div id="comment">구글 OAuth</div>
      </button>
    </div>
  );
}

export default App;