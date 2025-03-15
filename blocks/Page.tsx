import { Block } from "storyblok-nextjs";
import { Render } from "@/blocks";
import { NavItemProps } from "@/components/MainNav";

type Props = {
  body: Block[];
  mainNav?: NavItemProps[];
};

export default function Page({ body }: Props) {
  return <Render.List blocks={body} />;
}
