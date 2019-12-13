import React, { useState, useEffect } from 'react';
import globalPersonStore from "../common/globalstore";
import axios from 'axios';
import './AuthorizationCards.css';
import rawAuthData from './auths/authCard';

// {globalState.person}
function AuthorizationCards() {
    const [globalState, globalActions] = globalPersonStore();
    const [authData, setAuthData] = useState([]);
    
    function addOrReplace(array, item) { 
        const i = array.findIndex(_item => _item.type_id === item.type_id);
        if (i > -1) array[i] = item; 
        else array.push(item);
    }

    const utils = {
        getCardTotal: (authAry, category_id) => {
            const cardData = authAry.filter(item => item.category_id === category_id && item.auth_id !== "0");
            return cardData.length;
        }, 
        getHeaderData: (authAry, category_id) => {
            if (authAry.length < 1) return authAry;
            const retAry = [];
            const cardData = authAry.filter(item => item.category_id === category_id);

            let mostRecentDate = new Date(Math.max.apply(null, cardData.map( e => {
                return new Date(e.expire_date);
             })));
             let mostRecentObject = cardData.filter( e => { 
                 let d = new Date( e.expire_date ); 
                 return d.getTime() == mostRecentDate.getTime();
             })[0];
            
            mostRecentObject = utils.setExpireDates(mostRecentObject);
            retAry.push(mostRecentObject);
            return retAry;
        },
        setExpireDates: (authCard) => {
            let monthNames = new Array("Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep","Oct", "Nov", "Dec");
            let d = new Date( authCard.expire_date );
            authCard.expire_month = monthNames[d.getMonth()]
            authCard.expire_year = d.getFullYear();
            authCard.expire_day = d.getDate();

            return authCard
        }

    }
    
    useEffect(() => {
        if (globalState.person.id){
            const fetchData = async () => {
            const result = await axios(`https://marshaldb.midrealm.org/mid2/personauths.php?pId=${globalState.person.id}`,);
            const arryCards = rawAuthData();
            result.data.hits.forEach(auth => addOrReplace(arryCards, auth));
            setAuthData(arryCards);
            }
            fetchData();

        }
    },[globalActions, globalState]);

    const AuthorizationList = props => (
        <div id="authbox" className="authbox">
        { authData.map((item, index) =>
            item.category_id === props.category_id && item.person_id !== "0" &&
             <div id="authbox" className="authbox" key={item.category_id + item.type_id} >
                <div className= {'auth auth' + item.category_id + item.type_id} >
                    <div className="authtext">{item.type}</div>
                </div>
            </div>            
        ) }
        </div>
    )

    const AuthorizationCardHeader = props => (
        <div>
        {utils.getHeaderData(authData, props.category_id).map(item => 
            item &&
            <div className="cardheader" key={'header' + item.category_id}>
                <div className={'marshalicon ' + item.category}></div>
                <div className="headertext">{item.category}</div>
                <div id="eqdate" className="postdate">
                    <div id="eqmonth" className="postmonth">{item.expire_month}</div>
                    <div id="eqday" className="postday">{item.expire_day}</div>
                    <div id="eqyear" className="vtext">{item.expire_year}</div>
                </div>
            </div>            
        ) }
        </div>
    );


    const AuthorizationCards = props => (
        <> 
        {utils.getCardTotal(authData, props.category_id) > 0 &&
        <div className="card">
            <AuthorizationCardHeader category_id={props.category_id} />
            <hr className="style-one"></hr>
            <AuthorizationList category_id={props.category_id} />
        </div> 
        }
        </> 
    );

    return (
        <div className="cardbox">
            {globalState.person && <AuthorizationCards category_id="3" /> }
            {globalState.person && <AuthorizationCards category_id="5" /> }
            {globalState.person && <AuthorizationCards category_id="6" /> }
            {globalState.person && <AuthorizationCards category_id="8" /> } 
            {globalState.person && <AuthorizationCards category_id="1" /> }  
        </div>
    );
}

export default AuthorizationCards;