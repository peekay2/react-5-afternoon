import { createStore } from "redux";
import counter from "./ducks/reducer";

export default createStore(counter);