import React, {useState, useEffect} from 'react';

const Comment = (props) => {

    const [comment, setComment] = useState("");

    const inputChange = (e) => {           
        const {value} = e.target;    
        setComment(value);
        props.comment(value);    
    }

    useEffect(()=>{             
        if(props.clear)
            setComment("");
        else if(props.defaultComment)
            setComment(props.defaultComment);
    }, [props.clear, props.defaultComment]);
    
    return (
        <div>
            <div className="font-weight-bold mt-3">Comment:</div>
            <textarea 
                className="form-control" 
                rows="3"
                onChange={inputChange}
                value={comment}
            >  
            </textarea>
        </div>
    );
}

export default Comment;
