import { toast } from "react-toastify";

import config from "./config";
import * as Constants from "./constants";


export const shorten = (str) => {
    return str.slice(0, 10) + "..." + str.slice(str.length-8);
}

