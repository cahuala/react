import { useContext } from "react";
import ContextSection from "../contexts/ContextSection";

const useSection = ()=> useContext(ContextSection)
export default useSection