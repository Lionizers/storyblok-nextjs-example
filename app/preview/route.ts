import { sb } from "@/storyblok";

export const dynamic = "force-dynamic";

/**
 * Route handler for Storyblok's visual editor.
 * Use it by setting the preview URL in Storyblok to:
 * https://example.com/preview?token=<TOKEN>&slug=
 *
 * This handler will try to fetch the story for the given slug using the
 * provided access token. Upon success a redirect to the actual story is sent.
 */
export const GET = sb.previewRoute;
