import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import ProjectList from "@/app/components/ProjectList";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "The free, non-partisan projects built by Civics Studio, from the Parliament Tracker to CYFFL.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        title="What we've built."
        lede="Everything here is free to use and none of it needs an account. Two are live data projects you can download from."
      />

      <Section>
        <ProjectList />
      </Section>
    </div>
  );
}
