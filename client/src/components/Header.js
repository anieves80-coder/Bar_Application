import React from 'react';
import { Link } from 'react-router-dom';
import history from '../history';
import {InputGroup, DropdownButton, Dropdown} from 'react-bootstrap';

const Header = (props) => {

    const logFnc = () => {
        if(props.logStat === "Login")
            props.msgFnc(true);
        else
            history.push("/saved");       
    }

    return (
        <div className="container"> 
            <div className="mt-3">
                <div className="row">
                    <div className="col font-italic" style={{ fontSize: "18px" }}>Search for a Random Drink Application.</div>
                    <div className="d-block d-sm-none mr-2">
                        <InputGroup className="mr-2">
                            <DropdownButton
                                variant="secondary-primary"
                                title="MENU"
                                id="menu-dropdown"
                                size="sm"
                            >
                                <Dropdown.Item as="button"><Link to="/"><i className="fas fa-search mr-1"></i>Search</Link></Dropdown.Item>
                                <Dropdown.Item as="button" className="text-primary btn btn-link" onClick={logFnc}><i className="fas fa-book-open mr-1"></i>Saved</Dropdown.Item>
                                <Dropdown.Item as="button" className="text-primary btn btn-link" onClick={()=>props.logFnc()}>
                                    <i className="fas fa-sign-in-alt"></i> {props.logStat}
                                </Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </div>
                    <div className="col text-right d-none d-sm-block">
                        <span><Link to="/"><i className="fas fa-search mr-1"></i>Search</Link></span>
                        <span className="mx-3"><button className="btn btn-link" onClick={logFnc}><i className="fas fa-book-open mr-1"></i>Saved</button></span>
                        <span><button className="text-primary btn btn-link" onClick={()=>props.logFnc()}><i className="fas fa-sign-in-alt mr-1"></i>{props.logStat}</button></span>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );    
};

export default Header;