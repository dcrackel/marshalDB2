import React, { useState, useEffect } from 'react';
import globalPersonStore from "../common/globalstore";
import './Personcard.css';

// {globalState.person}
function Personcard() {
    const [globalState, globalActions] = globalPersonStore();

    const TestDrop = props => (
        <div id="testdrop" className='everythingdropdown'>
        {globalState.person && globalState.person.name} 
        </div>
      );
    
    return (
        <div id="personcard" className="" >
            <div id="innerpersoncard" className="personcard" pid="1852">
                <div id="namebox">
                    <div id="personicon"></div>
                    <div id="name">
                    <div id="firstname">Gebhard</div>
                    <div id="lastname">Rauten</div>
                </div>
                </div>
                <div id="groupbox" className="groupbox">
                    <div id="locationicon"></div>
                    <div id="groupname">
                        <div id="locationname" className="locname" branchid="105">Pferdestadt</div>
                        <div id="region">North Oaken</div>
                        <TestDrop />
                    </div>
                </div>
                <div id="printericon" ></div>
            </div>
        </div>
     
      );
}

export default Personcard;