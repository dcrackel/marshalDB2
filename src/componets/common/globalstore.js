import React from "react";
import useGlobalHook from "use-global-hook";
import * as actions from "./actions/globalactions";

const initialState = { counter: 0 };
const person = {
  id: '',
  name: '',
  type: '',
  branchid: '',
  branch: '',
  regionid: '',
  region: ''
};

const useGlobal = useGlobalHook(React, initialState, actions);
const globalPersonStore = useGlobalHook(React, person, actions);

export default useGlobal;
