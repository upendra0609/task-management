import React from "react";
import TaskCard from "../tsakCard/TaskCard";

const TaskList = () => {
  return (
    <div className={`space-y-5 w-[67vw]`}>
      {[1, 2, 3, 4].map((item) => (
        <TaskCard key={item} />
      ))}
    </div>
  );
};

export default TaskList;
