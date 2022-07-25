import BlogPostPreview from "./BlogPostFeaturedPreviewList";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

function BlogPostList(props) {
  return (
    <div>
      {props.title}
      {props.nodes &&
        props.nodes.slice(0, 1).map((node) => (
          <div key={node.id}>
            <BlogPostPreview {...node} isInList />
          </div>
        ))}
      {props.browseMoreHref && (
        <div>
          <AniLink fade to={props.browseMoreHref}>
            Browse more
          </AniLink>
        </div>
      )}
    </div>
  );
}

BlogPostList.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostList;
