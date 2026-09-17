import Link from "next/link";
import { projects } from "@/lib/projects";

/**
 * Projects as a stacked editorial list with an asymmetric label column.
 * No equal-width grid of bordered cards with icons.
 *
 * No rules between rows: the red kind label and the generous row padding do
 * the separating. Adding a hairline here is what made the page read as a
 * stack of unrelated strips.
 */
export default function ProjectList({ exclude }: { exclude?: string }) {
  const shown = exclude ? projects.filter((p) => p.href !== exclude) : projects;

  return (
    <ul>
      {shown.map((project) => (
        <li key={project.title}>
          <Link
            href={project.href}
            className="group grid gap-x-10 gap-y-2 py-6 md:grid-cols-[8rem_1fr]"
          >
            <span className="small pt-1.5 font-semibold text-red">
              {project.kind}
            </span>

            <span className="block">
              <span className="h3 block transition-colors group-hover:text-red">
                {project.title}
              </span>
              {project.fullName && (
                <span className="small mt-1 block text-muted">
                  {project.fullName}
                </span>
              )}
              <span className="copy mt-2.5 block text-[1rem]">
                {project.summary}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
