import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../componets/common/actions/globalactions";

const initialState = {
  counter: 0
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
