import type { Metadata } from "next";
import Link from "next/link";
import Comments from "@/app/components/Comments";
import CrossSiteLink from "@/app/components/CrossSiteLink";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "CYFFL",
  description:
    "The Canadian Youth Foundation for French Literacy. Free French learning resources and tutoring, run by students, for a country short thousands of qualified French teachers.",
};

const offerings = [
  {
    title: "Free French learning resources",
    description:
      "Online lessons and practice materials to help students build stronger foundations in French.",
  },
  {
    title: "Student registration",
    description:
      "Students can register for CYFFL support, resources, and updates through the student registration form.",
  },
  {
    title: "Local academic support",
    description:
      "In-person tutoring covering school help, homework, test prep, and building confidence in French.",
  },
];

export default function CYFFLPage() {
  return (
    <div>
      <PageHeader
        title="Canadian Youth Foundation for French Literacy"
        lede="Canada is short nearly 10,000 qualified French teachers. Students who want to learn French or stay in French Immersion are running out of options. CYFFL is a youth-run program filling that gap with free online resources and local tutoring support."
      >
        <CrossSiteLink href="https://canyffl.vercel.app/" className="cta cta-invert">
          Visit the CYFFL website
        </CrossSiteLink>
        <a href="mailto:canadianyouthffl@gmail.com" className="cta cta-invert">
          Contact CYFFL
        </a>
      </PageHeader>

      <Section title="Why this matters right now.">
        <div className="copy space-y-5">
          <p>
            Canada has two official languages, and that&apos;s supposed to
            mean something practically. French Immersion waitlists are growing
            and FSL classes are being cut while the teacher shortage gets
            worse each year. Students who want to engage with French have
            fewer and fewer places to do it.
          </p>
          <p>
            CYFFL started because students noticed this and decided to do
            something about it. The program is run by youth, for youth. It
            sits alongside school instruction and gives students who want to
            keep learning somewhere to turn.
          </p>
        </div>
      </Section>

      <Section title="Resources, registration, and support" tone="paper-2">
        <dl>
          {offerings.map((item) => (
            <div
              key={item.title}
              className="grid gap-x-10 gap-y-2 py-6 md:grid-cols-[16rem_1fr]"
            >
              <dt className="h3">{item.title}</dt>
              <dd className="copy text-[1rem]">{item.description}</dd>
            </div>
          ))}
        </dl>

        <p className="copy mt-8 text-[1rem]">
          Focus areas include French literacy foundations and online
          learning.
        </p>
      </Section>

      <Section title="Language access is a civic issue.">
        <p className="copy">
          If Canada is going to take bilingualism seriously, French has to be
          genuinely accessible to students who want to learn it. CYFFL is part
          of how Civics Studio thinks about public life: access to education
          and to language still depends far too much on which school you got
          into and which province you live in.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <CrossSiteLink href="https://canyffl.vercel.app/" className="cta">
            Visit the CYFFL website
          </CrossSiteLink>
          <Link href="/contact" className="cta">
            Contact Civics Studio
          </Link>
        </div>
      </Section>

      <Comments pageId="cyffl" />
    </div>
  );
}
