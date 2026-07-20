import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Civics Studio collects, uses, and protects information when you use our website and projects.",
};

const UPDATED = "July 20, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-ink">
      {/* Header */}
      <section className="border-b border-edge bg-ink">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-maple lowercase">
            legal
          </p>
          <h1 className="serif mt-4 text-5xl font-normal italic leading-tight tracking-[-0.02em] text-cream md:text-6xl lowercase">
            Privacy Policy
          </h1>
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-mist-dim">
            Last updated {UPDATED}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-ink">
        <div className="mx-auto max-w-3xl space-y-12 px-5 py-16">
          <div className="space-y-4">
            <p className="text-base leading-8 text-mist">
              Civics Studio (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) is a youth-led, non-partisan civic education
              project. This Privacy Policy explains what information we collect
              when you visit our website and use our projects, how we use it, and
              the choices you have. We keep data collection to a minimum.
            </p>
          </div>

          <Section title="Information we collect">
            <p>
              We do not require you to create an account to browse the site. We
              collect three kinds of information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-mist">
              <li>
                <span className="text-cream">Usage and analytics data</span>: how
                many people use our projects and how many times each page is
                viewed, along with a persistent visitor identifier that our
                analytics provider stores in a cookie so returning visits can be
                recognized.
              </li>
              <li>
                <span className="text-cream">Comments you post</span>: if you leave
                a comment on a project, we store the name and comment text you
                submit, and they are shown publicly on the page.
              </li>
              <li>
                <span className="text-cream">Information you choose to send</span>:
                if you email us, we receive whatever information you include, such
                as your name and email address.
              </li>
            </ul>
          </Section>

          <Section title="Analytics">
            <p>
              We use two analytics services to understand how our projects are
              used, mainly to measure how many people use the app and how many
              views each page receives:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-mist">
              <li>
                <span className="text-cream">Vercel Analytics</span>: cookieless
                measurement of visits and page views.
              </li>
              <li>
                <span className="text-cream">PostHog</span>: measures visits and
                page views and assigns each visitor a persistent identifier,
                stored in a cookie and in your browser&apos;s local storage, so we
                can recognize returning visits and build an anonymous visitor
                profile. When you follow certain links between the Civics Studio
                websites, this identifier is passed along so the visit is counted
                as the same person across our sites.
              </li>
            </ul>
            <p className="mt-4">
              These providers process data under their own privacy policies. We do
              not use this data for advertising, and we do not sell it.
            </p>
            <p className="mt-4">
              Some of our projects display public information sourced from open
              government data, such as records published by the Parliament of
              Canada. That data concerns public officials in their public roles
              and is not personal information about you as a visitor.
            </p>
          </Section>

          <Section title="Comments">
            <p>
              Some projects let you post a comment. When you do, the name and
              comment text you enter are stored in our database and displayed
              publicly on that page. Please do not include sensitive personal
              information in a comment. You can ask us to remove a comment at any
              time using the contact details below.
            </p>
          </Section>

          <Section title="How we use information">
            <p>We use the information we collect to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-mist">
              <li>Operate, maintain, and improve the site and our projects;</li>
              <li>Understand which resources are useful to students and educators;</li>
              <li>Display the comments you choose to post;</li>
              <li>Respond to messages you send us; and</li>
              <li>Keep the site secure and prevent abuse.</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information, and we do not use it for
              targeted advertising.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              We use a small number of cookies. Our PostHog analytics stores a
              cookie containing a persistent visitor identifier so we can
              recognize returning visits, and it also uses your browser&apos;s
              local storage for the same purpose. Vercel Analytics does not use
              cookies. You can clear or block cookies through your browser
              settings, which resets your visitor identifier and will not prevent
              you from using the site.
            </p>
          </Section>

          <Section title="Data retention and security">
            <p>
              We retain analytics data only as long as needed for the purposes
              described above and rely on our service providers&apos; standard
              retention practices. We take reasonable measures to protect the
              information we handle, but no method of transmission or storage is
              completely secure.
            </p>
          </Section>

          <Section title="Children&apos;s privacy">
            <p>
              Civics Studio creates resources for students and educators. We do
              not knowingly collect personal information from children beyond the
              anonymous usage data described above. If you believe a child has
              provided us personal information, please contact us and we will
              delete it.
            </p>
          </Section>

          <Section title="Your choices">
            <p>
              You can browse the site without creating an account, clear or block
              cookies through your browser to reset your visitor identifier, and
              ask us to delete a comment or message you have sent. To make a
              request, contact us using the details below.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we
              will revise the &ldquo;Last updated&rdquo; date at the top of this
              page.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href="mailto:civicsstudio@gmail.com"
                className="text-maple-soft underline underline-offset-4 transition hover:text-maple"
              >
                civicsstudio@gmail.com
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="serif text-2xl font-normal italic tracking-[-0.01em] text-cream lowercase">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-mist">
        {children}
      </div>
    </div>
  );
}
