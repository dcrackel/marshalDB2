import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useDebounce from '../common/debounce.js';
import './Header.css';

function Header() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  const [doSearch, setDoSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const removeURLEncoding = inStr => {
    inStr = inStr.replace(/%20/g, ' ');
    return inStr;
  }

  const getClassForType = type => {
    let classN = 'personicon';
    if (type === "1") classN = 'shireicon';
    if (type === "2") classN = 'baronyicon';
    console.log(type + classN);
    return classN;
  }
  
  const EverythingDropDown = props => (
    <div id="everythingdropdown" className='everythingdropdown'>
    {data.hits.map(item => (
        <div key={item.id} className="locitem" >
          <div key={item.id} className={getClassForType(item.type)}></div>
          {removeURLEncoding(item.name)}
          </div>
    )) }
    </div>
  );

  const searchDropDown = (text) =>  {
    setDoSearch(true);
    setQuery(text);
  }

  //this adds a delay, when a user starts typing until the search is preformed to allow
  //them to finish typing without doing a look-up on every charater as it's typed.
  const debounced = useDebounce(query, 500);

  useEffect(() => {
    if (query.length > 1 && doSearch && debounced){
      const fetchData = async () => {
        setDoSearch(false);
        const result = await axios(`https://marshaldb.midrealm.org/mid/dropdown2.php?s=${query}`,);
        setData(result.data);
     };
    fetchData();
    setShowDropDown(true);
    }

    if (query.length < 2 && doSearch && debounced){
       setData({ hits: [] });
       setDoSearch(false);
       setShowDropDown(false);
    }    

  }, [data, debounced, doSearch, query]);

  return (
	<div id='logobox' className='Logo-header' >
		<div id='logo'></div>
		<div id='titlebox'>
        <input id='searchbox' type='text' value={query} onChange={e => searchDropDown(e.target.value)} />
        <div className='searchicon smallbutton' />
        {showDropDown && <EverythingDropDown></EverythingDropDown>}
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