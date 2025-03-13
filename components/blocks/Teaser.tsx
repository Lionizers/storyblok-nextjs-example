import { RichText } from "storyblok-nextjs";
import { sb } from "@/storyblok";

type Props = {
  headline: string;
  text?: RichText;
};

export default function Teaser({ headline, text }: Props) {
  return (
    <div>
      <h2 className="text-2xl mb-10">{headline}</h2>
      <sb.RichText text={text} />
    </div>
  );
}
