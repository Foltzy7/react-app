import { AsyncStatus } from "../models/async-status";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OrgEvent } from "../models/orgEvent";

export const fetchOrgEvents = createAsyncThunk(
  "fetch-org-events",
  async ({ date }: { date: string }, thunkAPI) => {
    const orgEvent = {
      name: "Event for kids 1",
      location: "Church event center",
      description: "a generic kids events description",
    } as OrgEvent;
    return new Promise<[OrgEvent]>((resolve, reject) => {
      resolve([orgEvent]);
    });
  }
);

type State = {
  orgEvent: OrgEvent[];
  status: AsyncStatus;
};

const initialState: State = {
  orgEvent: [],
  status: AsyncStatus.notFetched,
};

const orgEventsSlice = createSlice({
  name: "orgEvent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrgEvents.pending, (state, action) => {
      return { ...state, status: AsyncStatus.loading };
    });
    builder.addCase(
      fetchOrgEvents.fulfilled,
      (state, action: { payload: OrgEvent[]; type: string }) => {
        const orgEvent = action.payload;

        return {
          ...state,
          orgEvent,
          status: AsyncStatus.done,
        };
      }
    );
    builder.addCase(fetchOrgEvents.rejected, (state, action) => {
      return { ...state, status: AsyncStatus.error };
    });
    builder.addDefaultCase((state, action) => state);
  },
});

export default orgEventsSlice.reducer;
