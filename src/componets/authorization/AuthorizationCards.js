import React, { useState, useEffect } from 'react';
import globalPersonStore from "../common/globalstore";
import axios from 'axios';
import './AuthorizationCards.css';
//import makeNewCards from './auths/authCard'

// {globalState.person}
function AuthorizationCards() {
    const [globalState, globalActions] = globalPersonStore();
    const [authData, setAuthData] = useState({ hits: [] });
    
    function authCard(category, expire_date, auths) {
        this.category =  category;
        this.expire_date = expire_date;
        this.auths = auths;
    };

    function addOrReplace(array, item) { 
        const i = array.findIndex(_item => _item.type_id === item.type_id);
        console.log('i:' + i + item.type_id);
        if (i > -1) array[i] = item; 
        else array.push(item);
    }
    
    const auth137 = {auth_id: "0", person_id: "0", type_id:"37", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Armored",category:"Marshal",expire_date:"1966-05-01"}
    const auth138 = {auth_id: "0", person_id: "0", type_id:"38", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Combat Archery",category:"Marshal",expire_date:"1966-05-01"};
    const auth139 = {auth_id: "0", person_id: "0", type_id:"39", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Rapier",category:"Marshal",expire_date:"1966-05-01"};
    const auth140 = {auth_id: "0", person_id: "0", type_id:"40", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Archery",category:"Marshal",expire_date:"1966-05-01"};
    const auth141 = {auth_id: "0", person_id: "0", type_id:"41", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Equestrian",category:"Marshal",expire_date:"1966-05-01"};
    const auth142 = {auth_id: "0", person_id: "0", type_id:"42", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Siege",category:"Marshal",expire_date:"1966-05-01"};
    const auth143 = {auth_id: "0", person_id: "0", type_id:"43", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Thrown Weapons",category:"Marshal",expire_date:"1966-05-01"};
    const auth144 = {auth_id: "0", person_id: "0", type_id:"44", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Armored Youth",category:"Marshal",expire_date:"1966-05-01"};
    const auth146 = {auth_id: "0", person_id: "0", type_id:"46", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Clerk of the Roster",category:"Marshal",expire_date:"1966-05-01"};
    const auth147 = {auth_id: "0", person_id: "0", type_id:"47", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Kingdom Earl Marshal",category:"Marshal",expire_date:"1966-05-01"};
    const auth151 = {auth_id: "0", person_id: "0", type_id:"51", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Youth Rapier",category:"Marshal",expire_date:"1966-05-01"};
    const auth153 = {auth_id: "0", person_id: "0", type_id:"53", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"1",type:"Hound Coursing",category:"Marshal",expire_date:"1966-05-01"};
    const auth301 = {auth_id: "0", person_id: "0", type_id:"1",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Sword & Shield",category:"Armored",expire_date:"1966-05-01"};
    const auth302 = {auth_id: "0", person_id: "0", type_id:"2",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Two Weapons",category:"Armored",expire_date:"1966-05-01"};
    const auth303 = {auth_id: "0", person_id: "0", type_id:"3",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Great Weapon",category:"Armored",expire_date:"1966-05-01"};
    const auth304 = {auth_id: "0", person_id: "0", type_id:"4",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Spear",category:"Armored",expire_date:"1966-05-01"};
    const auth305 = {auth_id: "0", person_id: "0", type_id:"5",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Polearm",category:"Armored",expire_date:"1966-05-01"};
    const auth306 = {auth_id: "0", person_id: "0", type_id:"6",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Youth Sparring",category:"Armored",expire_date:"1966-05-01"};
    const auth309 = {auth_id: "0", person_id: "0", type_id:"9",  issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Combat Archery",category:"Armored",expire_date:"1966-05-01"};
    const auth310 = {auth_id: "0", person_id: "0", type_id:"10", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Siege Crew",category:"Armored",expire_date:"1966-05-01"};
    const auth311 = {auth_id: "0", person_id: "0", type_id:"11", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"3",type:"Siege Engine",category:"Armored",expire_date:"1966-05-01"};
    const auth512 = {auth_id: "0", person_id: "0", type_id:"12", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Single",category:"Rapier",expire_date:"1966-05-01"};
    const auth515 = {auth_id: "0", person_id: "0", type_id:"15", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Parry",category:"Rapier",expire_date:"1966-05-01"};
    const auth516 = {auth_id: "0", person_id: "0", type_id:"16", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Dagger",category:"Rapier",expire_date:"1966-05-01"};
    const auth517 = {auth_id: "0", person_id: "0", type_id:"17", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Case",category:"Rapier",expire_date:"1966-05-01"};
    const auth518 = {auth_id: "0", person_id: "0", type_id:"18", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Longsword",category:"Rapier",expire_date:"1966-05-01"};
    const auth520 = {auth_id: "0", person_id: "0", type_id:"20", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Cut & Thrust",category:"Rapier",expire_date:"1966-05-01"};
    const auth552 = {auth_id: "0", person_id: "0", type_id:"52", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"5",type:"Youth Sparring",category:"Rapier",expire_date:"1966-05-01"};
    const auth622 = {auth_id: "0", person_id: "0", type_id:"22", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV I - Weapon & Shield",category:"Youth",expire_date:"1966-05-01"};
    const auth623 = {auth_id: "0", person_id: "0", type_id:"23", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV I - Rapier",category:"Youth",expire_date:"1966-05-01"};
    const auth624 = {auth_id: "0", person_id: "0", type_id:"24", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV II - Weapon & Shield",category:"Youth",expire_date:"1966-05-01"};
    const auth625 = {auth_id: "0", person_id: "0", type_id:"25", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV II - Two Handed",category:"Youth",expire_date:"1966-05-01"};
    const auth626 = {auth_id: "0", person_id: "0", type_id:"26", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV II - Rapier",category:"Youth",expire_date:"1966-05-01"};
    const auth627 = {auth_id: "0", person_id: "0", type_id:"27", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV III - Weapon & Shield",category:"Youth",expire_date:"1966-05-01"};
    const auth628 = {auth_id: "0", person_id: "0", type_id:"28", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV III - Two Handed",category:"Youth",expire_date:"1966-05-01"};
    const auth629 = {auth_id: "0", person_id: "0", type_id:"29", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"6",type:"DIV III - Rapier",category:"Youth",expire_date:"1966-05-01"};
    const auth830 = {auth_id: "0", person_id: "0", type_id:"30", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"General Riding",category:"Equestrian",expire_date:"1966-05-01"};
    const auth831 = {auth_id: "0", person_id: "0", type_id:"31", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"Mounted Games",category:"Equestrian",expire_date:"1966-05-01"};
    const auth832 = {auth_id: "0", person_id: "0", type_id:"32", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"Mounted Archery",category:"Equestrian",expire_date:"1966-05-01"};
    const auth833 = {auth_id: "0", person_id: "0", type_id:"33", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"Driving",category:"Equestrian",expire_date:"1966-05-01"};
    const auth834 = {auth_id: "0", person_id: "0", type_id:"34", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"Crest Combat",category:"Equestrian",expire_date:"1966-05-01"};
    const auth835 = {auth_id: "0", person_id: "0", type_id:"35", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"Mounted Combat",category:"Equestrian",expire_date:"1966-05-01"};
    const auth836 = {auth_id: "0", person_id: "0", type_id:"36", issued:"1966-05-01",status_id:"1",rank_id:null,note:"",category_id:"8",type:"Joust",category:"Equestrian",expire_date:"1966-05-01"}

    function makeNewCards() {
        const cards = new Array();
        const armoredCard = new authCard("Marshal", "2021-04-09", new Array());
        // armoredCard.category = "Marshal";
        // armoredCard.expire_date = "2021-04-09";
        // armoredCard.auths = [];

        armoredCard.auths.push(auth1);
        armoredCard.auths.push(auth2);
        cards.push(armoredCard);
        //console.log(armoredCard.category);
        //cards.authCards.push(armoredCard);  
       
        return cards;
    }

    useEffect(() => {
        if (globalState.person){
            const fetchData = async () => {
            const result = await axios(`https://marshaldb.midrealm.org/mid2/personauths.php?pId=${globalState.person.id}`,);
            setAuthData(result.data);
            console.log(result.data)

            //const cards = makeNewCards();
            const arryCards = new Array();
            arryCards.push(auth1);
            arryCards.push(auth2);

            result.data.hits.forEach(auth => addOrReplace(arryCards, auth));

            }
            fetchData();
        }
    }; [globalActions, globalState.person]);


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