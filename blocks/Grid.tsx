import { Block } from "storyblok-nextjs";
import { Render } from "@/blocks";

type Props = {
  columns: Block[];
};

export default function Grid({ columns }: Props) {
  return (
    <div className="grid grid-cols-3">
      <Render.List blocks={columns} />
    </div>
  );
}
