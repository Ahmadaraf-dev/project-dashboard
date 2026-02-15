import { useState, useMemo } from "react";
import { projects } from "../data/projects";
import { filterProjects } from "../utils/filterProjects";
import type { ProjectStatus } from "../types/project";

import ProjectList from "../components/ProjectList";
import ProjectFilters from "../components/ProjectFilters";
import EmptyState from "../components/EmptyState";

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedStatuses, setSelectedStatuses] = useState<ProjectStatus[]>([]);

  const filteredProjects = useMemo(() => {
    return filterProjects(projects, searchTerm, selectedStatuses);
  }, [searchTerm, selectedStatuses]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Project Dashboard</h1>

      <ProjectFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedStatuses={selectedStatuses}
        setSelectedStatuses={setSelectedStatuses}
      />

      {projects.length === 0 ? (
        <EmptyState message="No projects available." />
      ) : filteredProjects.length === 0 ? (
        <EmptyState message="No matching results." />
      ) : (
        <ProjectList projects={filteredProjects} />
      )}
    </div>
  );
}

export default Dashboard;
