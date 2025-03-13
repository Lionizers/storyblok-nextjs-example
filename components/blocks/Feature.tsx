import { RichText } from "storyblok-nextjs";
import { sb } from "@/storyblok";

type Props = {
  name: string;
  text?: RichText;
};

export default function Feature({ name, text }: Props) {
  return (
    <div className="column feature">
      <h2>{name}</h2>
      <sb.RichText text={text} />
    </div>
  );
}
