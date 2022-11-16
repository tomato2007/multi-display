import logo from './logo.svg';
import './App.css';

function App_old() {

    const Vid = ({src}) => {
        console.log('src', src);
        return (
            <video width="100%" height="100%" autoPlay src={src}>
                Your browser does not support the video tag.
            </video>
        )
    };

  return (
    <div className="app-container">
        <div className="container">
            <div className="element">
                <Vid  key="one" src="http://vod16.sweet.tv/hls/2642/WsH_P8fnVRJg5uLdXXrPqcmP-iqlqevcr1HCGMvsnCm4uZMkoQ5OmK545GdrPiA/master.m3u8" />
            </div>
            <div className="element">
                <Vid key="two" src="http://vod16.sweet.tv/hls/18034/_luEAGJPzNLECnoSY3FJ15oOvV9skKmuVFY-af9TNVaB76_OoiaRSed9RkmYvw/master.m3u8" />
            </div>
        </div>
        <div className="container">
            <div className="element">
                <Vid key="three" src="http://vod11.sweet.tv/hls/4777/5VhZt2dt_xZ1ojQRHb5oEf2SCTqQa_SaeH8-K5KSfBULT8NHgfN30XvzQGBvQC0/master.m3u8" />
            </div>
            <div className="element">
                <Vid key="four" src="http://vod18.sweet.tv/hls/4927/v8ZrwnUNExasZK3aq6Z_K9wPPhduTPCG9h524NylvhpUqZIFJMPNjzhuoUGVAy0/master.m3u8" />
            </div>
        </div>
    </div>
  );
}

export default App_old;
