import { sb } from "@/storyblok";

/**
 * Makes the Storyblok Admin UI locally available under /admin.
 * This allows us to use the visual editor without https during development.
 */
export default sb.adminPage();
