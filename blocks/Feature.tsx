import { RichText } from "storyblok-nextjs";
import { Render } from "@/blocks";

type Props = {
  name: string;
  text?: RichText;
};

export default function Feature({ name, text }: Props) {
  return (
    <div className="column feature">
      <h2>{name}</h2>
      <Render.RichText text={text} />
    </div>
  );
}
