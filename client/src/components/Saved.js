import React, {useEffect, useState} from 'react';
import axios from 'axios';
import history from '../history';
import Drinks from './Drinks';

const Saved = (props) => {

    const [ready, setReady] = useState("Loading...");

    const verifyLogin = () => {              
        if(props.logStat === "Login")
            history.push('/');                
    }
  
    const getSavedDrinks = () => {        
        const records = [];        
        axios.get('/api/getAllSaved').then((res) => {            
            for(let i = 0; i < res.data.length; i++){                
                records.push(
                    <Drinks savedDrink={res.data[i].drinkId} //id
                            savedUrl={res.data[i].drinkImg}  //img url
                            savedRating={res.data[i].star}  //star rating
                            savedComments={res.data[i].comments} //comments
                            savedName={res.data[i].drinkName} //name
                            drinkColId={res.data[i]._id}//drink collections Id
                            cbFnc={()=>getSavedDrinks()}
                            getDrinkInfo={getDrinkInfo}
                            key={res.data[i].drinkId}
                    />
                );
            }
            setReady(records);            
         });                
    }

    const getDrinkInfo = (data) => {
       props.getFnc(data);
    }

    useEffect( () => {
        verifyLogin();
        getSavedDrinks();    
    }, []);

    return (        
        <div className="container"> 
            <div className="row">              
               {ready}              
            </div>                 
        </div>
    );    
}

export default Saved;

