import Button from "./Button.jsx";

export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ ADD PROJECT</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full mt-2 text-left px-4 py-2 rounded-md text-stone-300 hover:text-stone-100 hover:bg-stone-600">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
