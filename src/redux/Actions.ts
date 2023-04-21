import { actionModel } from "../models/typeModels";

export enum TimerIncre {
  mins = "INCRE_MIN",
  secs = "INCRE_SECS",
  hrs = "ICRE_HRS",
  reset = "RESET",
}

const increMins: actionModel = {
  type: TimerIncre.mins,
};
const increSecs: actionModel = {
  type: TimerIncre.secs,
};
const increHrs: actionModel = {
  type: TimerIncre.hrs,
};

const reset: actionModel = {
  type: TimerIncre.reset,
};

export const resetFunc = (): {} => {
  return reset;
};
export const Hrsfunc = (): {} => {
  return increHrs;
};
export const Minsfunc = (): {} => {
  return increMins;
};
export const Secsfunc = (): {} => {
  return increSecs;
};
