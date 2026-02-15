https://github.com/Ahmadaraf-dev/project-dashboard

git clone <your-repo-url>
cd project-dashboard

//Install dependencies
npm install

//Run the dev server
npm run dev

//ASSUMPTIONS
Projects are stored locally in a file called src/data/projects.ts
Status is of type "Active", "On Hold", "Completed"
The optional fields are "budget", "endDate", "description"
Tailwind CSS is enough for styling
No backend is required for this assignment.

//TRADE-OFF

State management(useState, useMemo) - were used because they are lightweight, readable and suitable for small dataset
filtering (client-side only) - Use for the assignment recommendation, to avoid over-engineering
routing (react-router-dom) - it is use because it is simple and industry standard
edge cases for conditional rendering and null handling which help prevents crashes and ensures predictable UI
styling (Tailwind CSS) - for minimal dependency, and easy maintainence
| Components use (Default exports) to Simplifies imports and improves clarity

//Tech Stack
React 18
TypeScript
Vite
Tailwind CSS @3
React Router DOM
