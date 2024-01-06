import NoProjectImg from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-8 text-center w-2/3">
      <img
        src={NoProjectImg}
        className="w-16 h-16 objext-contain mx-auto"
      ></img>
      <h2 className="text-xl font-bold text-stone-600 my-4">
        NO PROJECT SELECTED
      </h2>
      <p className="text-stone-400 mb-4 ">
        Select from Sidebar or Create New Project
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>CREATE NEW PROJECT</Button>
      </p>
    </div>
  );
}
