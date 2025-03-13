import { StoryblokNext } from "storyblok-nextjs";
import { blocks } from "./components/blocks";

export const sb = new StoryblokNext({
  blocks,
  dataResolvers: {
    async page(_page, { getStories }) {
      const rootStories = await getStories({
        level: 1,
      });
      return {
        mainNav: rootStories.map((s) => ({
          title: s.name,
          link: s.public_url!,
        })),
      };
    },
  },
});
