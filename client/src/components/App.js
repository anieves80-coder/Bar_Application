import React, {useState, useEffect} from 'react';
import { Router, Route } from 'react-router-dom';
import axios from 'axios';
import history from '../history';
import Header from './Header';
import Search from './DrinkView';
import Saved from './Saved';
import Modal from './MessageModal';

const App = () => {

    const [logStat, setLogStat] = useState("Login");    
    const [savedData, setSavedData] = useState({});
    const [msgActive, setMsgActive] = useState(false);
    
    //Verifies if the user is logged in.
    const verifyLogin = async () => {           
        const res = await axios.get('/api/current_user');
        
       if(res.data){      
          setLogStat("Logout");          
       } else {              
          setLogStat("Login");                         
       }
    }

    //Logs in or out the user.
    const login = () => {       
       if(logStat === "Logout") 
            window.location.href = "/api/logout";
       else
            window.location.href = "/auth/google";
    }

    const msgCb = () => {                
        history.push("/");        
    }

    const setModal = () => {
        if(msgActive)
            return <Modal msg={"You need to be logged in to view your saved drinks."} cb={msgCb} setActive={setMsgActive}/>
    }

    useEffect( () => {
        console.log("is this rerendering");
        console.log(logStat);
        verifyLogin();         
    },[]);
    
    const getClickedDrink = data => {        
        setSavedData(data);
        history.push("/");        
    }

    return (
        <div>            
            <Router history={history}>
                <div>
                    <Header logStat={logStat} logFnc={()=>login()} msgFnc={setMsgActive}/>                    
                    <Route exact path="/" render={ () => <Search savedInfo={savedData} logStat={logStat} />}/>
                    <Route exact path="/saved" render={ () => <Saved logStat={logStat} getFnc={getClickedDrink}/> } />                                 
                </div>
            </Router>
            <div>{setModal()}</div>            
        </div>       
    );    
}

export default App;