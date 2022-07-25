import React from "react";
import BlogPostPreview from "./BlogPostPreviewGrid";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

function BlogPostGrid(props) {
  return (
    <>
      {props.title}
      <div className="grid md:grid-cols-3 md:gap-x-8 gap-y-10">
        {props.nodes &&
          props.nodes.slice(0, 3).map((node) => (
            <div key={node.id}>
              <BlogPostPreview {...node} />
            </div>
          ))}
      </div>
      {/* {props.browseMoreHref && (
        <div>
          <AniLink fade to={props.browseMoreHref}>
            Browse more
          </AniLink>
        </div>
      )} */}
    </>
  );
}

BlogPostGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostGrid;
