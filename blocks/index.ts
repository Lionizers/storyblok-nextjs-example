import { createRenderComponents } from "storyblok-nextjs";
import feature from "./Feature";
import grid from "./Grid";
import page from "./Page";
import teaser from "./Teaser";

export const Render = createRenderComponents({
  feature,
  grid,
  page,
  teaser,
});
