<script>
  import { onMount } from "svelte";
  import SectionTitle from "./SectionTitle.svelte";

  const WIDGET_ID = "1587069145";
  const URL =
    "https://www.goodreads.com/review/custom_widget/4799967.Kevin's%20bookshelf:%20currently-reading?cover_position=left&cover_size=small&num_books=3&order=d&shelf=currently-reading&show_author=1&show_cover=0&show_rating=0&show_review=0&show_tags=0&show_title=1&sort=date_started&widget_bg_color=FFFFFF&widget_bg_transparent=true&widget_border_width=1&widget_id=1587069145&widget_text_color=000000&widget_title_size=medium&widget_width=medium";
  onMount(() => {
    const tag = document.createElement("script");
    tag.src = URL;
    tag.onload = () => {
      document
        .getElementById("gr_custom_widget_1587069145")
        .querySelectorAll("a")
        .forEach(node => {
          node.setAttribute("rel", "nofollow noopener");
          node.setAttribute("target", "_blank");
        });
    };
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });
</script>

<style>
  :global(#gr_custom_widget_1587069145) {
    padding: 1em;
  }

  :global(.gr_custom_each_container_1587069145) {
    margin-bottom: 0.5em;
  }

  :global(.gr_custom_header_1587069145) {
    display: none;
  }

  :global(.gr_custom_title_1587069145) {
    display: inline;
  }

  :global(.gr_custom_author_1587069145) {
    display: inline-block;
  }

  :global(#gr_custom_widget_1587069145 center) {
    display: none;
  }
</style>

<SectionTitle>Currently Reading</SectionTitle>
<div id="gr_custom_widget_{WIDGET_ID}" />
