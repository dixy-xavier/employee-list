import { useMemo, FunctionComponent, useState } from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import useApplications from "./useApplications";
import { getPositions } from "./utils";
import { Position } from "./types";

const App: FunctionComponent = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const { data, isLoading } = useApplications(selectedPosition);
  const candidates = data?.candidates || [];
  const filteredCandidates = data?.filteredCandidates || [];
  const positions: Position[] = useMemo(() => {
    return getPositions(candidates || []);
  }, [candidates]);

  if (isLoading || !data?.candidates) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Filters positions={positions} onPositionChange={setSelectedPosition} />
      <Table data={filteredCandidates} />
    </div>
  );
};

export default App;
