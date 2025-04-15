import { StoryblokNext } from "storyblok-nextjs/server";

export const sb = new StoryblokNext({
  dataResolvers: {
    async page(_page, { loader }) {
      const rootStories = await loader.getStories({
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
