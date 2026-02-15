import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "1",
    name: "Internal CRM Revamp",
    client: "Acme Corporation",
    status: "Active",
    startDate: "2024-01-15",
    endDate: null,
    budget: 45000,
    description: "Modernizing legacy CRM system."
  },
  {
    id: "2",
    name: "E-commerce Website Redesign With Extended UI Improvements",
    client: "Bright Retail Ltd",
    status: "On Hold",
    startDate: "2023-09-01",
    endDate: null,
    budget: 32000,
    description: "Full redesign of e-commerce platform."
  },
  {
    id: "3",
    name: "Mobile App MVP",
    client: "Startup Labs",
    status: "Completed",
    startDate: "2023-02-10",
    endDate: "2023-06-20",
    description: "Initial MVP build."
  }
];
