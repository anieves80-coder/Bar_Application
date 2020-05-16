import React from 'react';
import axios from 'axios';
import Rating from './searchComponents/Rating';
import './style/drinkStyle.css';

const Drinks = (props) => {

    const deleteDrink = async id => {             
        await axios.post('/api/delete', {id});
        props.cbFnc();
    }

    const getDrinkInfo = () => {
        
        const drinkObj = {
            id: props.savedDrink,            
            star: props.savedRating,
            comments: props.savedComments
        }

        props.getDrinkInfo(drinkObj);
    }

    return (
        <div className="col-lg-3 mb-3 mr-4">                
            <div className="card cardLayout">
                <img src={props.savedUrl} className="card-img-top drinkImg" alt="Not available." />
                <div className="card-body">
                    <u>
                        <button className="font-weight-bold text-dark btn btn-link" onClick={getDrinkInfo}>{props.savedName}</button>
                    </u>                                                    
                    <div className="row">
                        <div className="col-7">
                            <Rating star={()=>null} editable={false} val={props.savedRating}/>
                        </div>
                        <div className="col text-center pt-2">
                            <button className="btn btn-link" onClick={() => deleteDrink(props.drinkColId)}><small className="font-weight-bold text-danger">Delete</small></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    );   
}

export default Drinks;
