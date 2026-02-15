import { Link } from "react-router-dom";
import type { Project } from "../types/project";

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="border p-4 rounded-md hover:bg-gray-50">
      <Link to={`/projects/${project.id}`}>
        <h2 className="font-semibold truncate">{project.name}</h2>
        <p className="text-sm text-gray-600">
          Client: {project.client}
        </p>
        <p className="text-sm">
          Status: {project.status}
        </p>
        <p className="text-sm">
          Start: {project.startDate}
        </p>
        <p className="text-sm">
          End: {project.endDate ?? "Ongoing"}
        </p>
      </Link>
    </div>
  );
}

export default ProjectItem;
