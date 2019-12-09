import React, { useState, useEffect } from 'react';
import globalPersonStore from "../common/globalstore";
import axios from 'axios';
import './Personcard.css';

// {globalState.person}
function Personcard() {
    const [globalState, globalActions] = globalPersonStore();
    const [branchData, setBranch] = useState({ hits: [] });

    useEffect(() => {
        if (globalState.person){
              const fetchData = async () => {
              const result = await axios(`https://marshaldb.midrealm.org/mid2/getbranch.php?pId=${globalState.person.id}`,);
              setBranch(result.data);
              let p = globalState.person
              p.branch = result.data.hits[0].branch;
              p.branchid = result.data.hits[0].group_id;
              p.region = result.data.hits[0].region;
              p.regionId = result.data.hits[0].region_id;
              globalActions.storePerson(p);
              }
          
            fetchData();
        }

        }, [globalActions, globalState.person]);

    const seperateName = (inStr, pos) => {
        let namePart = inStr.split(' ');
        return namePart[pos];
    }

    const BranchNode = props => (
        <div id="groupbox" className="groupbox">
        <div id="locationicon" />
            <div id="groupname">
                <div id="locationname" className="locname" branchid="105"><>{globalState.person.branch}</></div>
                <div id="region"><>{globalState.person.region}</></div>
            </div> 
        </div>   
    );
    
    const PersonCard = props => (
        <div id="personcard" className="" >
            <div id="innerpersoncard" className="personcard" pid="1852">
                <div id="namebox">
                    <div id="personicon"></div>
                    <div id="name">
                    <div id="firstname">{seperateName(globalState.person.name, 0)}</div>
                    <div id="lastname">{seperateName(globalState.person.name, 1)}</div>
                </div>
                </div>
                    <BranchNode />
                <div id="printericon" ></div>
            </div>
        </div>
    );

    return (
        <>
        {globalState.person && <PersonCard /> }  
        </>
      );
}

export default Personcard;