import type { Project } from "../types/project";

interface ProjectDetailProps {
  project: Project;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="border p-6 rounded-md space-y-3">
      <h1 className="text-2xl font-semibold break-words">
        {project.name}
      </h1>

      <p>
        <strong>Client:</strong> {project.client}
      </p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>

      <p>
        <strong>Start Date:</strong> {project.startDate}
      </p>

      <p>
        <strong>End Date:</strong>{" "}
        {project.endDate ?? "Ongoing"}
      </p>

      <p>
        <strong>Budget:</strong>{" "}
        {project.budget
          ? `$${project.budget.toLocaleString()}`
          : "Not specified"}
      </p>

      {project.description && (
        <p>
          <strong>Description:</strong> {project.description}
        </p>
      )}
    </div>
  );
}

export default ProjectDetail;
