import type { Project, ProjectStatus } from "../types/project";

export function filterProjects(
  projects: Project[],
  searchTerm: string,
  selectedStatuses: ProjectStatus[]
): Project[] {
  return projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatuses.length === 0 ||
      selectedStatuses.includes(project.status);

    return matchesSearch && matchesStatus;
  });
}
