import { useQuery } from "@tanstack/react-query";
import mockApplications from "./config/mockApplications.json";
import { ApplicationResponse } from "./types";

const getCandidates = (position: string) => {
  const candidates = mockApplications as ApplicationResponse[];
  const filteredCandidates: ApplicationResponse[] = mockApplications.filter((application) => position ? application.position_applied === position : true) as ApplicationResponse[];
  return Promise.resolve({ filteredCandidates, candidates });
};

const useApplications = (position: string) => {
  return useQuery(["applications", { position }], () => getCandidates(position));
};

export default useApplications;
