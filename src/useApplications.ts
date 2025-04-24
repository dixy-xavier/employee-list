import { useQuery } from "@tanstack/react-query";
import mockApplications from "./config/mockApplications.json";
import { ApplicationResponse } from "./types";

const useApplications = () => {
  return useQuery(["applications"], () =>
    Promise.resolve(mockApplications as ApplicationResponse[])
  );
};

export default useApplications;
