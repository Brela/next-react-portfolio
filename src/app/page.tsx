import React from "react";
import ProjectContainer from "./containers/ProjectContainer";

export default function Home() {
  return (
    <main className="py-10 px-5 flex flex-col items-center gap-8">
      <div>
        <h1 className="text-4xl">Clayton Breland</h1>
        <h2 className="text-accent-green text-2xl">Full Stack Web Developer</h2>
      </div>
      <section>
        <ProjectContainer />
        {/*   call this orderly, then the next background pixels etc
        then in those components use the Project containers wrapper to style them */}
      </section>
    </main>
  );
}
