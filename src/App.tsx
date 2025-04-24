import { useMemo, FunctionComponent } from "react";
import Filters from "./components/Filters";
import Table from "./components/Table";
import useApplications from "./useApplications";
import { getPositions } from "./utils";
import { Position } from "./types";

const App: FunctionComponent = () => {
  const { data, isLoading } = useApplications();
  const positions: Position[] = useMemo(() => {
    return getPositions(data || []);
  }, [data]);

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Filters positions={positions} />
      <Table data={data} />
    </div>
  );
};

export default App;
