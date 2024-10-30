import Bounded from "@/components/Bounded";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `CaseStudies`.
 */
export type CaseStudiesProps = SliceComponentProps<Content.CaseStudiesSlice>;

/**
 * Component for "CaseStudies" Slices.
 */
const CaseStudies = async ({
  slice,
}: CaseStudiesProps): Promise<JSX.Element> => {
  const client = await createClient();
  const caseStudies = await Promise.all(
    slice.items.map(async (item: { case_study: any }) => {
      if (isFilled.contentRelationship(item.case_study)) {
        return await client.getByID<Content.CaseStudyDocument>(
          item.case_study.id,
        );
      }
    }),
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h2 className="max-w-4xl text-balance text-center text-5xl font-medium md:text-7xl">
        <PrismicText field={slice.primary.heading} />
      </h2>

      <div className="mx-auto mt-6 max-w-2xl text-balance text-center text-slate-300">
        <PrismicRichText field={slice.primary.body} />
      </div>

      <div className="mt-12 md:mt-6">
        {slice.primary.case_study.map(async (item, index) => {
          if (!isFilled.contentRelationship(item.case_study)) return null;
          const caseStudyDoc = await client.getByID<Content.CaseStudyDocument>(item.case_study.id);
          return (
            <div
              key={item.case_study.id}
              className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
            >
              <div className="col-span-1 flex flex-col justify-center gap-4">
                <h3 className="text-4xl">
                  <PrismicText field={caseStudyDoc.data.company} />
                </h3>
                <div className="max-w-md">
                  <PrismicRichText field={caseStudyDoc.data.description} />
                </div>

                <PrismicNextLink
                  document={caseStudyDoc}
                  className="after:absolute after:inset-0 hover:underline"
                >
                  Read <PrismicText field={caseStudyDoc.data.company} /> 
                </PrismicNextLink>
              </div>
              {isFilled.image(caseStudyDoc.data.logo_image) ? (
                <PrismicNextImage
                  field={caseStudyDoc.data.logo_image}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={clsx(
                    "rounded-3xl lg:col-span-2 p-8 min-w-[300px] max-w-[800px] w-full",
                    index % 2 && "md:-order-1",
                  )}
                />
              ) : (
                <div className="rounded-3xl bg-slate-800 lg:col-span-2 p-8">
                  No image available
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Bounded>
  );
};

export default CaseStudies;
