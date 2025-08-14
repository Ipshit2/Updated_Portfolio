import Landing from "@/components/Landing";
import About from "@/components/About";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Landing/>
      <About/>
      <Projects/>
      <Work/>
      <Contact/>
    </div>
  );
}
