import React from 'react';
import './Header.css';

function Header() {

  return (
	<logobox id='logobox' className='Logo-header' >
		<div id='logo'></div>
		<div id='titlebox'>
                <input id='searchbox' type='text' 
                    onFocus='showEverythingDrop()' 
                    onKeyUp='generateEverythingDropDown()' />
                <button id='search' type="submit">
                    <smallbutton />
                </button>
				<div id="everythingdropdown"></div>
		</div>
	 
        <navmenu>
            <activereport />
	        <authreport />
            <loginbutton />
        </navmenu>

	</logobox>
  );
}

export default Header;