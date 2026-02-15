
**AI_USAGE.md**

//Tools Used

**ChatGPT / OpenAI**

//Parts AI Assisted

- `filterProjects.ts` utility function  
- Component boilerplate for `ProjectList`, `ProjectItem`, `ProjectFilters`, `ProjectDetail`

//What I Changed and Rejected

- Reviewed AI-generated code for **type safety**; converted JS snippets to TypeScript  
- Cleaned up imports/exports to **default exports** for pages  
- Added **truncate / break-words** styling for long names  
- Applied **pure function pattern** for filtering  
- Ensured **no mutation** of original data  
- Added explicit **optional field handling** (`budget`, `endDate`, `description`)  

//Disagreements / Cautions

- Some AI suggestions used **heavy abstractions** or unnecessary hooks was rejected  
- Avoided global state or context for a small dataset to keep simplicity and readability  
- Did not implement virtualization or Redux as assignment scope does not require it  

//Summary

- AI was used as **assistive guidance**  
- All final code was **reviewed, corrected, and typed by me**  
- Every component and utility is **understandable and explainable**  
- I can **defend all logic decisions** in an interview
