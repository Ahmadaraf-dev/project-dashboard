import type { Project } from "../types/project";
import ProjectItem from "./ProjectItem";

interface ProjectListProps {
  projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="space-y-3">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
