import { SliceComponentProps } from "@prismicio/react";
import AnimatedContent from "./AnimatedContent";
import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";


/**
 * Props for `Hero`
 */

export type HerooProps = SliceComponentProps<Content.HerooSlice>;

const Heroo = ({ slice }: HerooProps): JSX.Element => {
/**
 * Component for "Hero" Slices.
 */
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <AnimatedContent slice={slice} />
    </Bounded>
  );
};

export default Heroo;

