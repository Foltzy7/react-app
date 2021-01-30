import {OrgEvent} from "../models/orgEvent";
import {get} from "../repositories/orgEventsRepo";

type Args = {
  date?: string;
};

export async function getOrgEvents({ date }: Args): Promise<OrgEvent[]> {
  const path = "/orgEvents/all";
  return get(path, { date });
}
