import { FunctionComponent } from "react";
import { Select } from "@highlight-ui/select";
import { Input } from "@highlight-ui/input";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Position } from "../types";

type Props = {
  positions: Position[];
};

const Filters: FunctionComponent<Props> = ({ positions }) => {
  const onPositionFilterChange = (position: string) => {
    console.log("position:", position);
  };
  const onSearchChange = (search: string) => {
    console.log("search:", search);
  };

  return (
    <div className="flex items-center justify-between m-8">
      <div className="flex gap-5">
        <Select
          enableFlowTriggers
          closeOnSelect
          options={positions}
          onSelect={([{ value }]) => onPositionFilterChange(String(value))}
          triggerLabel="Position Applied"
          variant="inline"
        />
      </div>
      <Input
        placeholder="Search by name"
        prefix={<MagnifyingGlassIcon className="h-4 w-4" />}
        onChange={({ target: { value } }) => onSearchChange(value)}
      />
    </div>
  );
};

export default Filters;
