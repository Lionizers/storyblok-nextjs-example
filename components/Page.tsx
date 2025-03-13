import { Story } from "storyblok-nextjs";
import { sb } from "@/storyblok";

export type PageProps = {
  story: Story;
};

export function Page({ story, ...props }: PageProps) {
  console.log("Page", story.content);
  return (
    <>
      {/* <Header
          logo={config.header_logo}
          nav={headerNav}
        /> */}
      <sb.Block {...story.content} {...props} />
    </>
  );
}
