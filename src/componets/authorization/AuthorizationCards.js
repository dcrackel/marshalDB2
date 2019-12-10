import React, { useState, useEffect } from 'react';
import globalPersonStore from "../common/globalstore";
import axios from 'axios';
import './AuthorizationCards.css';
import rawAuthData from './auths/authCard';

// {globalState.person}
function AuthorizationCards() {
    const [globalState, globalActions] = globalPersonStore();
    const [authData, setAuthData] = useState({ hits: [] });
    
    function addOrReplace(array, item) { 
        const i = array.findIndex(_item => _item.type_id === item.type_id);
        //console.log('i:' + i + item.type_id);
        if (i > -1) array[i] = item; 
        else array.push(item);
    }
    
    useEffect(() => {
        if (globalState.person){
            const fetchData = async () => {
            const result = await axios(`https://marshaldb.midrealm.org/mid2/personauths.php?pId=${globalState.person.id}`,);
            setAuthData(result.data);
            console.log(result.data)

            const arryCards = rawAuthData();
            result.data.hits.forEach(auth => addOrReplace(arryCards, auth));
            
            result.data.hits.forEach(auth2 => console.log('authData ' + auth2.auth_id + ' | '+ auth2.type + ' | ' + auth2.category));
            }
            fetchData();

        }
    },[globalActions, globalState.person]);


    const AuthorizationCards = props => (
        <div id="Equestrian" className="card">
            <div id="armoredheader" className="cardheader">
                <div id="equestrianicon" className="marshalicon"></div>
                <div className="headertext">Equestrian</div>
                <div id="eqdate" className="postdate">
                    <div id="eqmonth" className="postmonth">Dec</div>
                    <div id="eqday" className="postday">30</div>
                    <div id="eqyear" className="vtext">2021</div>
                </div>
            </div>

            <hr className="style-one"></hr>
            <div id="authbox" className="authbox">
                <div id="gr" className="auth">
                    <div className="authtext">General Riding</div>
                </div>
            </div>
        </div>  
    );

    return (
        <div id="cardbox">
            {globalState.person && <AuthorizationCards /> }  
        </div>
    );
}

export default AuthorizationCards;