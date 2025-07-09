import { useContext } from "react";
import ScheduleContext from "../contexts/ScheduleContext";

const useSchedule = ()=> useContext(ScheduleContext)
export default useSchedule