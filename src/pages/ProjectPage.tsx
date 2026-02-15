import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectDetail from "../components/ProjectDetail";
import EmptyState from "../components/EmptyState";

function ProjectPage() {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-6">
        <EmptyState message="Project not found." />
        <div className="mt-4">
          <Link to="/" className="text-blue-600 underline">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <ProjectDetail project={project} />
      <div className="mt-4">
        <Link to="/" className="text-blue-600 underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ProjectPage;
