"use client";
import { Section } from "@/components";
import GradualBlurMemo from "@/components/common/GradualBlur";

export const Gradual = () => {
  return (
    <Section size="full" className="absolute bottom-0 fixed sticky z-999">
      <GradualBlurMemo
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </Section>
  );
};
