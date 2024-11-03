import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import PackageCard from "@/components/PackageCard";
import ButtonLink from "@/components/ButtonLink";

const packages = [
  {
    title: "Essentials Package",
    description: "Foundational services to establish an online presence, perfect for startups and small businesses.",
    features: [
      "Logo Design",
      "Web design and development with SEO Optimisation",
      "Basic Data Analytics with simple dashboards and reports",
      "Optional Business and Finance strategy Audit"
    ]
  },
  {
    title: "Growth Package",
    description: "Accelerate your business growth with data-driven strategies for customer acquisition and retention.",
    features: [
      "Web/App development with SEO Optimisation",
      "Custom Sales Funnel & Conversion Analysis",
      "CRM Setup & Integration",
      "KPI & Performance Dashboard"
    ]
  },
  {
    title: "Advanced AI & Data Package",
    description: "Harness the power of AI & ML to drive smarter, data-driven decisions.",
    features: [
      "Machine Learning Models",
      "AI Integration (Chatbots & Automation)",
      "Predictive & Advanced Analytics",
      "Data-driven Decision Support"
    ]
  },
  {
    title: "Enterprise Package",
    description: "Bespoke solutions for large businesses requiring comprehensive support.",
    features: [
      "Full-stack Cloud infrastructure & Data engineering",
      "Enterprise Web/App development",
      "Comprehensive Business strategy",
      "Flexible Outsourcing options"
    ]
  }
];

export async function generateMetadata(): Promise<Metadata> {
  const client = await createClient();
  const page = await client
    .getByUID("page", "packages")
    .catch(() => notFound());

  return {
    title: prismic.asText(page.data.title),
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image.url || "",
        },
      ],
    },
  };
}

export default async function PackagesPage() {
  const client = await createClient();
  const page = await client
    .getByUID("page", "packages")
    .catch(() => notFound());

  return (
    <Bounded as="article" className="packages-page overflow-visible">
      <div className="relative grid place-items-center text-center overflow-visible">
        <div className="absolute inset-x-[-50%] top-[-100px] bottom-[-50px]">
          <StarGrid />
        </div>
        <h1 className="relative text-balance text-center text-5xl font-medium md:text-7xl">
          {prismic.asText(page.data.title)}
        </h1>
        <p className="relative text-xl text-amber-400 mt-2 mb-6">
          Start Your Journey Today
        </p>
        <p className="relative mt-8 max-w-3xl text-lg text-slate-300">
          We craft digital experiences that grow with your business and resonate with your audience.
          Choose the perfect package for your business needs
        </p>
      </div>


      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.title}
            title={pkg.title}
            description={pkg.description}
            features={pkg.features}
            index={index}
          />
        ))}
      </div>

      <div className="mt-4 text-center [&>*]:m-0">
        <SliceZone slices={page.data.slices} components={components} />
      </div>

      <div className="-mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-8">
        <ButtonLink 
          href="https://calendar.app.google/MryhU5MdfGnRV1rY8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Consultation
        </ButtonLink>
        
        <ButtonLink 
          href="mailto:nafianltd@gmail.com?subject=Business Inquiry&body=Hi Nafian Solutions,%0D%0A%0D%0AI'm interested in learning more about your services.%0D%0A%0D%0ABest regards,"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </ButtonLink>
      </div>

    </Bounded>
  );
}
