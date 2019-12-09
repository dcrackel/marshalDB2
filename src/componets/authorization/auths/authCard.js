const authCard = {
    category: "Marshal",
    expire_date: "2021-04-09",
    auths: []
}

const auth = {
    auth_id: "29910",
    person_id: "1852",
    type_id: "37",
    issued: "2019-02-15",
    status_id: "1",
    rank_id: null,
    note: "updated by: Gebhard",
    category_id: "1",
    type: "Armored",
    category: "Marshal",
    expire_date: "2021-04-09"
  };

  const auth2 = {
    auth_id: "23923",
    person_id: "1852",
    type_id: "44",
    issued: "2016-10-27",
    status_id: "1",
    rank_id: null,
    note: "updated by: Gebhard",
    category_id: "1",
    type: "Armored Youth",
    category: "Marshal",
    expire_date: "2021-04-09"
  }


  function makeNewCards() {
    const cards = new Array();
    const armoredCard = new Object();
    armoredCard.category = "Marshal";
    armoredCard.expire_date = "2021-04-09";
    armoredCard.auths = [];

    armoredCard.auths.push(auth);
    armoredCard.auths.push(auth2);
    cards.push(armoredCard);
    //console.log(armoredCard.category);
    //cards.authCards.push(armoredCard);  
   
    return cards;
  }