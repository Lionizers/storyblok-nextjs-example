import { Block } from "storyblok-nextjs";
import { NavItemProps } from "../MainNav";
import { sb } from "@/storyblok";

type Props = {
  body: Block[];
  mainNav?: NavItemProps[];
};

export default function Page({ body }: Props) {
  return <sb.Blocks blocks={body} />;
}
