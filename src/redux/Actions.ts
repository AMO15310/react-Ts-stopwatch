import { actionModel } from "../models/typeModels";

export enum TimerIncre {
  mins = "INCRE_MIN",
  secs = "INCRE_SECS",
  hrs = "ICRE_HRS",
  reset = "RESET",
  resetSecs = "RESET_SECS",
  stopTimer = "STOP_TIMER",
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
const resetSecs: actionModel = {
  type: TimerIncre.resetSecs,
};
const stopTimer: actionModel = {
  type: TimerIncre.stopTimer,
};
export const stopTimerFunc = () => {
  return stopTimer;
};
export const resetFunc = () => {
  return reset;
};
export const Hrsfunc = () => {
  return increHrs;
};
export const Minsfunc = () => {
  return increMins;
};
export const Secsfunc = () => {
  return increSecs;
};
export const resetSecFunc = () => {
  return resetSecs;
};
