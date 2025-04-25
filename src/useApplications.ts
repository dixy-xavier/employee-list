import { useQuery } from "@tanstack/react-query";
import mockApplications from "./config/mockApplications.json";
import { ApplicationResponse } from "./types";

const getCandidates = (position: string, searchText: string) => {
  const candidates = mockApplications as ApplicationResponse[];
  let filteredCandidates = mockApplications.filter((application) => (position ? application.position_applied === position : true)
  && (searchText ? application.name.toLowerCase().includes(searchText.toLowerCase()) : true)) as ApplicationResponse[];
  return Promise.resolve({ filteredCandidates, candidates });
};

const useApplications = (position: string, searchText: string) => {
  return useQuery(["applications", { position, searchText }], () => getCandidates(position, searchText));
};

export default useApplications;
