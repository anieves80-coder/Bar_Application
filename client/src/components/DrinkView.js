import React, {useState, useEffect} from 'react';
import axios from 'axios';
import loading from '../img/loading.gif';
import Rating from './searchComponents/Rating';
import Comment from './searchComponents/Comment';
import SaveButton from './searchComponents/SaveButton';

const DrinkView = (props) => {

    const [drinkId, setDrinkId] = useState("");
    const [drinkImg, setDrinkImg] = useState("");
    const [drinkName, setDrinkName] = useState("");
    const [drinkCat, setDrinkCat] = useState("");
    const [drinkGlass, setDrinkGlass] = useState("");
    const [drinkType, setDrinkType] = useState("");
    const [drinkIngredients, setDrinkIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [comments, setComments] = useState("");
    const [star, setStar] = useState(1);
    const [clear, setClear] = useState(false);    
    const [saveMsg, setSaveMsg] = useState("");
        
    const fetchRandomDrink = async () => {
        setDrinkImg(loading);                
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');        
        const id = response.data.drinks[0].idDrink;        
        const verifyDuplicates = await axios.post('/api/verifyDuplicate', {drinkId:id});
        
        if(verifyDuplicates.data.res)
            setSaveMsg("This drink already saved.");
        else
            setDrinks(response);          
    }

    const fetchDrinkById = async data => {
        setDrinkImg(loading);
        const id = data.id;
        
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        
        if(response.data.drinks){        
            setComments(data.comments);
            setStar(data.star);
            setDrinks(response);            
        } else {
            fetchRandomDrink(); 
        }
    }

    const setDrinks = response => {
        if(response.data.drinks){            
            const data = response.data.drinks[0];

            setDrinkId(data.idDrink);
            setDrinkImg(data.strDrinkThumb);
            setDrinkName(data.strDrink);
            setDrinkCat(data.strCategory);
            setDrinkGlass(data.strGlass);
            setDrinkType(data.strAlcoholic);
            setInstructions(data.strInstructions);
            setDrinkIngredients(setIngredients(data));
            setSaveMsg("");
        }
    }

    const setDrinkTypeCall = () => {
        if(props.savedInfo.id)
            fetchDrinkById(props.savedInfo);
        else
            fetchRandomDrink();
    };

    useEffect( () => {             
        setDrinkTypeCall();
    }, []);

    // This function will grab all the ingredients & measurements and format it for proper viewing.
    const setIngredients = (data) => {

        const ingredients = [];
        const measure = [];
        const mixIngredients = [];
        const mixMeasurements = [];

        for (let key in data) {
            if (key.substr(0, 13) === 'strIngredient')
                if (data[key])
                    ingredients.push(key);
            if (key.substr(0, 10) === 'strMeasure')
                measure.push(key);
        }

        ingredients.forEach((info, i) => {
            mixIngredients.push(data[info]);
            mixMeasurements.push(data[measure[i]]);
        });

        const measurements = mixMeasurements.map((res, i) => <div key={i}>{res}</div>);

        return mixIngredients.map((res, i) => {
            if (measurements[i].props.children && measurements[i].props.children.length > 1)
                return (
                    <div className="row" key={i}>
                        <div className="col font-weight-bold border-bottom border-right">{res}:</div>
                        <div className="col text-left font-italic border-bottom">{measurements[i]}</div>
                    </div>
                );
            else
                return (
                    <div className="row" key={i}>
                        <div className="col text-center font-weight-bold border-bottom">{res}</div>
                    </div>
                );
        });
    };
        const saveData = async () => {

            if(props.logStat === "Login"){                
                setSaveMsg("You need to be logged in to save.");
            } else {
                const data = {
                    drinkId,
                    comments,
                    star,
                    drinkImg,
                    drinkName
                }
                
                const res = await axios.post("/api/save", data);           
                
                if(res.data.status === "ok"){
                    setSaveMsg("Save successful.");
                }
                if(res.data.status === "updated"){                    
                    setSaveMsg("This drink was already saved. Info was updated.");

                }
            }
        }

        const randDrink = async () => {
            setClear(true);
            setComments("");
            setStar(1);
            await fetchRandomDrink();            
            setClear(false);
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 text-left mt-1 ">
                        <img
                            src={drinkImg}
                            alt="Drink Thumb"
                            height="400px"
                            width="100%"
                            style={{ maxWidth: "400px" }}
                        />
                        <button
                            className="btn btn-outline-primary btn-lg btn-block mt-1 mb-2"
                            onClick={randDrink}
                            width="100%"
                            style={{ maxWidth: "400px" }}
                        >Search</button>
                    </div>
                    <div className="col mt-2">
                        <h3><u>{drinkName}</u></h3>
                        <br />
                        <div className="row">
                            <div className="col-3 col-md-2">
                                <div className="font-weight-bold">Category: </div>
                                <div className="font-weight-bold">Glass: </div>
                                <div className="font-weight-bold">Drink: </div>
                            </div>
                            <div className="col text-left">
                                <div className="font-italic">{drinkCat}</div>
                                <div className="font-italic">{drinkGlass}</div>
                                <div className="font-italic">{drinkType}</div>
                            </div>
                        </div>
                        <div className="font-weight-bold">Ingredients:</div>
                        <div className="row container">
                        <div className="col text-right">{drinkIngredients}</div>
                        </div>
                        <br />
                        <div><span className="font-weight-bold">Instructions: </span><span className="font-italic">{instructions}</span></div>
                    </div>
                </div>                
                <Comment comment={setComments} clear={clear} defaultComment={comments} />
                <Rating star={setStar} label={"Rating:"} editable={true} val={star} clear={clear}/>
                <div className="mt-4"><small className="text-danger">{saveMsg}</small></div>
                <SaveButton saveFnc={saveData} />                  
            </div>            
        );    
};

export default DrinkView; 
