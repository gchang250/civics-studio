import type { Metadata } from "next";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email Civics Studio about classroom use, or to send a correction to any vote or profile on the site.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Get in touch"
        lede="One address, and a person reads it. Write about classroom use, or send a correction if you find something wrong in our data."
      >
        <a href="mailto:civicsstudio@gmail.com" className="cta cta-invert">
          civicsstudio@gmail.com
        </a>
      </PageHeader>

      <Section title="What to write about">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="copy space-y-4">
            <p>
              Teachers and club organizers: tell us what you&apos;re running
              and we&apos;ll tell you how to use the record with a group.
              Everything is free and there&apos;s nothing to sign.
            </p>
            <p>
              Corrections are especially welcome. Every vote comes from
              Parliament&apos;s open data and every profile is sourced, but if
              you find something wrong, send the specific vote number or member
              and we&apos;ll check it against the record.
            </p>
          </div>

          <div className="lg:pt-1">
            <h3 className="h3">What we say no to</h3>
            <p className="copy mt-2 text-[1rem]">
              We don&apos;t endorse parties or candidates, and we take no
              funding from them. Requests along those lines will get a polite
              no.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
