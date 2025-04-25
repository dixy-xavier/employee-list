import { useMemo, FunctionComponent, useState } from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import useApplications from "./useApplications";
import { getPositions } from "./utils";
import { ApplicationResponse, Position } from "./types";

const App: FunctionComponent = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [searchText, setSearchText] = useState('');

  const { data, isLoading } = useApplications(selectedPosition, searchText);
  const candidates = data?.candidates || [];
  const filteredCandidates = data?.filteredCandidates || [];

  const positions: Position[] = useMemo(() => {
    return getPositions(candidates || []);
  }, [candidates]);

  if (isLoading || !candidates) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Filters positions={positions} onPositionChange={setSelectedPosition} onSearch={setSearchText} />
      <Table data={filteredCandidates as ApplicationResponse[]} />
    </div>
  );
};

export default App;
