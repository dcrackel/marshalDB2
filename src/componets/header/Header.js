import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Header.css';

function Header() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    if (query.length > 1){
    const fetchData = async () => {
      const result = await axios(`https://marshaldb.midrealm.org/mid/dropdown.php?filterString=${query}`,);
      setData(result.data);
      alert(data.name);
    };
    fetchData();
    }
  }, [query]);

  return (
	<div id='logobox' className='Logo-header' >
		<div id='logo'></div>
		<div id='titlebox'>
        <input id='searchbox' type='text' value={query} onChange={e => setQuery(e.target.value)} />
        <div className='searchicon smallbutton' />
				<div id="everythingdropdown">
          {data.hits.map(item => (
            <li key={item.id}>
              <a href={item.id}>{item.name}</a>
            </li>
          ))} 
        </div>
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