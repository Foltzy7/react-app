import { RootState } from "../store/store";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const ministriesSelector = (state: RootState) => state.ministries.ministries;
const ministrySelector = createSelector(
  [ministriesSelector],
  (ministries) => ministries
);

export function useMinistries() {
  const ministries = useSelector(ministrySelector);
  return { ministries };
}
