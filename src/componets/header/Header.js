import React from 'react';
import './Header.css';
//import {showEverythingDrop, } from '../common/search.js';

const getDropDownData = (value) =>
{
    if (value.length > 2) {
      fetch('https://marshaldb.midrealm.org/mid/' + 'dropdown.php')
      .then(res => res.json())
      .then((data) => {
        //this.setState({ contacts: data })
        alert(data);
      })
      .catch(console.log)
    }
}


function Header() {

  return (
	<div id='logobox' className='Logo-header' >
		<div id='logo'></div>
		<div id='titlebox'>
        <input id='searchbox' type='text' 
            //onFocus={showEverythingDrop()} 
            //onKeyUp={useKeyPress()} 
            onChange={e => getDropDownData(e.target.value)}
            />
        <div className='searchicon smallbutton' />
				<div id="everythingdropdown"></div>
		</div>
	 
        <div id='navmenu'>
            <div id='activereport' />
	        <div id='authreport' />
            <div id='loginbutton' />
        </div>

	</div>
  );
}

export default Header;