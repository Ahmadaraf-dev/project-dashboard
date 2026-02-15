import type { ProjectStatus } from "../types/project";

interface ProjectFiltersProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedStatuses: ProjectStatus[];
  setSelectedStatuses: React.Dispatch<
    React.SetStateAction<ProjectStatus[]>
  >;
}

const statuses: ProjectStatus[] = [
  "Active",
  "On Hold",
  "Completed"
];

function ProjectFilters({
  searchTerm,
  setSearchTerm,
  selectedStatuses,
  setSelectedStatuses
}: ProjectFiltersProps) {
  const toggleStatus = (status: ProjectStatus) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(
        selectedStatuses.filter((s) => s !== status)
      );
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
  };

  return (
    <div className="mb-4 space-y-3">
      <input
        type="text"
        placeholder="Search by project or client"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 w-full rounded-md"
      />

      <div className="flex gap-4">
        {statuses.map((status) => (
          <label key={status} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedStatuses.includes(status)}
              onChange={() => toggleStatus(status)}
            />
            {status}
          </label>
        ))}
      </div>
    </div>
  );
}

export default ProjectFilters;
