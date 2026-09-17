import type { Metadata } from "next";
import Link from "next/link";
import Comments from "@/app/components/Comments";
import CrossSiteLink from "@/app/components/CrossSiteLink";
import PageHeader from "@/app/components/PageHeader";
import Section from "@/app/components/Section";

export const metadata: Metadata = {
  title: "The CanPol Index",
  description:
    "A cost-of-living index mapped across Canada's federal electoral districts, riding by riding.",
};

export default function CanPolIndexPage() {
  return (
    <div>
      <PageHeader
        title="The CanPol Index"
        lede="A cost-of-living index organized by federal riding. We track what people in each district actually pay for housing and groceries, so you can see how affordability shifts across the country and what your MP is accountable to."
      >
        <CrossSiteLink href="https://canpolindex.vercel.app/" className="cta cta-invert">
          Visit the index
        </CrossSiteLink>
      </PageHeader>

      <Section title="Where you live shapes what you pay.">
        <div className="copy space-y-5">
          <p>
            Cost of living in Canada is not one number. A renter in Vancouver
            Centre and a homeowner in rural New Brunswick live under the same
            federal government while dealing with completely different
            financial realities.
          </p>
          <p>
            The CanPol Index maps those differences by electoral district,
            going riding by riding where a national average would flatten
            everything out. You get what people actually pay, alongside the MP
            who represents them.
          </p>
        </div>
      </Section>

      <Section title="What the index covers" tone="paper-2">
        <dl>
          <div className="grid gap-x-10 gap-y-1 py-5 md:grid-cols-[10rem_1fr]">
            <dt className="h3">338</dt>
            <dd className="copy text-[1rem]">
              Federal electoral districts tracked across Canada.
            </dd>
          </div>
          <div className="grid gap-x-10 gap-y-1 py-5 md:grid-cols-[10rem_1fr]">
            <dt className="h3">Sources</dt>
            <dd className="copy text-[1rem]">
              Statistics Canada and Elections Canada.
            </dd>
          </div>
          <div className="grid gap-x-10 gap-y-1 py-5 md:grid-cols-[10rem_1fr]">
            <dt className="h3">Free</dt>
            <dd className="copy text-[1rem]">
              No account and no paywall. Just open it.
            </dd>
          </div>
        </dl>

        <p className="copy mt-8 text-[1rem]">
          Topics include housing affordability and inflation by riding.
        </p>
      </Section>

      <Section title="Votes and costs, together.">
        <p className="copy">
          The Parliament Tracker shows how your MP votes. The CanPol Index
          shows the economic conditions in the riding they represent. Put them
          side by side and you get a clearer picture of whether what happens in
          Ottawa actually reflects what people back home are dealing with.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <CrossSiteLink href="https://canpolindex.vercel.app/" className="cta">
            Explore the index
          </CrossSiteLink>
          <Link href="/projects/parliament-tracker" className="cta">
            Parliament Tracker
          </Link>
        </div>
      </Section>

      <Comments pageId="canpol-index" />
    </div>
  );
}
