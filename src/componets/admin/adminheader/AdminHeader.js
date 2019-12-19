import React, { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../../common/debounce.js";
import useGlobal from "../../common/globalstore.js";

import "./AdminHeader.css";

function Header() {
  const [data, setData] = useState({ hits: [] });
  const [profileImage, setProfileImage] = useState("");
  const [query, setQuery] = useState("");
  const [doSearch, setDoSearch] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [globalState, globalActions] = useGlobal();
  //const { requests, success, fail } = globalState.status;

  const loginOutClicked = () => {
    globalActions.logout(globalState);
  };

  const removeURLEncoding = inStr => {
    inStr = inStr.replace(/%20/g, " ");
    return inStr;
  };

  const getClassForType = type => {
    let classN = "personiconsmall";
    if (type === "1") classN = "shireicon";
    if (type === "2") classN = "baronyicon";
    return classN;
  };

  const EverythingDropDown = props => (
    <div id="everythingdropdown" className="everythingdropdown">
      {data.hits.map(item => (
        <div
          key={item.id + item.type}
          className="locitem"
          onClick={e =>
            selectItem(item.id, item.type, removeURLEncoding(item.name))
          }
        >
          <div className={getClassForType(item.type)}></div>
          {removeURLEncoding(item.name)}
        </div>
      ))}
    </div>
  );

  const getBranch = person => {
    const fetchData = async () => {
      const result = await axios(
        `https://marshaldb.midrealm.org/mid2/getbranch.php?pId=${globalState.person.id}`
      );
      person.branch = result.data.hits[0].branch;
      person.branchid = result.data.hits[0].group_id;
      person.region = result.data.hits[0].region;
      person.regionId = result.data.hits[0].region_id;
      globalActions.storePerson(person);
    };
    fetchData();
  };

  const selectItem = (id, type, name) => {
    const person = globalState.person;
    person.id = id;
    person.type = type;
    person.name = name;
    person.branch = "";
    globalActions.storePerson(person);
    getBranch(person);
    setQuery("");
    setDoSearch(false);
    setShowDropDown(false);
  };

  const searchDropDown = text => {
    setDoSearch(true);
    setQuery(text);
  };

  const ShowUser = () => (
    <div className="userpersonbox" onClick={e => loginOutClicked()}>
      {globalState.profile ?
      <img
        className="loggedInUserIcon"
        src={globalState.profile ? globalState.profile.picture : ""}
        alt="profile pic"
      />
      :
      <div className="login"></div>
      } 

      <div className="authtext2">Log Out</div>
    </div>
  );

  //this adds a delay, when a user starts typing until the search is preformed to allow
  //them to finish typing without doing a look-up on every charater as it's typed.
  const debounced = useDebounce(query, 250);

  const fetchDataAdmin = () => {
    setDoSearch(false);
    axios({
      method: "post",
      url: "https://marshaldb.midrealm.org/mid2/admindropdown.php",
      headers: {
        "Content-Type": "applicatoin/json"
      },
      data: { tid: globalActions.getIdToken(), s: query }
    }).then(
      response => {
        setData(response.data);
      },
      error => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    // if (!global.profile) {
    //   //if refresh is pressed the use icon is forgotten then replaces it.
    //   try {
    //     //let temp = JSON.parse(globalActions.getProfile());
    //     setProfileImage(JSON.parse(globalActions.getProfile()));

    //   } catch {}
    // }

    if (query.length > 1 && doSearch && debounced) {
      fetchDataAdmin();
      setShowDropDown(true);
    }

    if (query.length < 2 && doSearch && debounced) {
      setData({ hits: [] });
      setDoSearch(false);
      setShowDropDown(false);
    }
  }, [data, doSearch, query]);

  return (
    <div id="logobox" className="Logo-header">
      <div id="logo"></div>
      <div id="titlebox">
        <input
          id="searchbox"
          type="text"
          value={query}
          onChange={e => searchDropDown(e.target.value)}
        />
        <div className="searchicon smallbutton" />
        {showDropDown && <EverythingDropDown />}
      </div>

      <div className="navmenu">
        <div className="activereport" />
        <div className="authreport" />
        <div className="loginbutton">
          <ShowUser />
        </div>
      </div>
    </div>
  );
}

export default Header;
