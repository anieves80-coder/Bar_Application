
import React, {useState, useEffect} from 'react';

const Rating = (props) => {

    const [starsArr, setStarArr] = useState(["text-warning"]);    
    const starsArrTemp = [];

    const clickHandler = (num) => {
                
        for(let i= 0; i < 5; i++){
            i < num ? starsArrTemp.push("text-warning"):starsArrTemp.push("")            
        }
        
        if(props.editable){
            setStarArr(starsArrTemp);
            props.star(num);
        }
    }    

    useEffect( () => {            
        clickHandler(props.val);
        setStarArr(starsArrTemp);
    },[props.val]);
            
        return (            
            <div className="mt-3">                
                <div className="font-weight-bold">{props.label}</div>
                <span className={starsArr[0]} onClick={()=>clickHandler(1)}><i className="fas fa-star mr-1"></i></span>
                <span className={starsArr[1]} onClick={()=>clickHandler(2)}><i className="fas fa-star mr-1"></i></span>
                <span className={starsArr[2]} onClick={()=>clickHandler(3)}><i className="fas fa-star mr-1"></i></span>
                <span className={starsArr[3]} onClick={()=>clickHandler(4)}><i className="fas fa-star mr-1"></i></span>
                <span className={starsArr[4]} onClick={()=>clickHandler(5)}><i className="fas fa-star mr-1"></i></span>                
            </div>
        );    
};

export default Rating;
