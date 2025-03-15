import type { RichText } from "storyblok-nextjs";
import { Render } from "@/blocks";

type Props = {
  headline: string;
  text?: RichText;
};

export default function Teaser({ headline, text }: Props) {
  return (
    <div>
      <h2 className="text-2xl mb-10">{headline}</h2>
      <Render.RichText text={text} />
    </div>
  );
}
