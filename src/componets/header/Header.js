import React from 'react';
import './Header.css';

const getDropDownData = (value) =>
{
    if (value.length > 2) {
      fetch('https://marshaldb.midrealm.org/mid/' + 'dropdown.php')
      .then(res => res.json())
      .then((data) => {
        //this.setState({ contacts: data })
/*
return json
id: "1852"
name: "Gebhard Rauten"
type: "0" 
*/
        console.log(data);
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