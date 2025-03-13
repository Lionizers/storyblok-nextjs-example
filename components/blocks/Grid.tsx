import { Block } from "storyblok-nextjs";
import { sb } from "@/storyblok";

type Props = {
  columns: Block[];
};

export default function Grid({ columns }: Props) {
  return (
    <div className="grid grid-cols-3">
      <sb.Blocks blocks={columns} />
    </div>
  );
}
