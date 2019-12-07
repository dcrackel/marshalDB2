import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useDebounce from '../common/debounce.js';
import './Header.css';

function Header() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('');
  const [doSearch, setDoSearch] = useState(false);

  const searchDropDown = (text) =>  {
    setDoSearch(true);
    setQuery(text);
  }

  //this adds a delay, when a user starts typing until the search is preformed to allow
  //them to finish typing without doing a look-up on every charater as it's typed.
  const debounced = useDebounce(query, 500);

  useEffect(() => {
    if (query.length > 1 && doSearch && debounced){
      console.log(`${query} ${doSearch} ${debounced}`);
      const fetchData = async () => {
        setDoSearch(false);
        const result = await axios(`https://marshaldb.midrealm.org/mid/dropdown2.php?s=${query}`,);
        setData(result.data);
     };
    fetchData();
    }

    if (query.length < 2 && doSearch && debounced){
       setData({ hits: [] });
       //setQuery('');
       setDoSearch(false);
    }

  }, [data, debounced, doSearch, query]);

  return (
	<div id='logobox' className='Logo-header' >
		<div id='logo'></div>
		<div id='titlebox'>
        <input id='searchbox' type='text' value={query} onChange={e => searchDropDown(e.target.value)} />
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