import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { getBlogUrl } from "../../lib/helpers";
// import PortableText from "./portableText";
// import { format } from "date-fns";

function BlogPostPreviewGrid(props) {
  return (
    <AniLink
      fade
      to={getBlogUrl(props.publishedAt, props.slug.current)}
      className="no-underline"
    >
      <div className="group">
        <div className="overflow-hidden mb-4 -mx-4 md:mx-0">
          {props.mainImage && props.mainImage.asset && (
            <GatsbyImage
              image={props.mainImage.asset.gatsbyImageData}
              alt={props.mainImage.alt}
              className="block transform scale-100 md:group-hover:scale-110 transition-all duration-500 ease-linear"
            />
          )}
        </div>
        <div>
          {props.categories && (
            <>
              {props.categories.slice(0, 1).map((category) => (
                <div
                  className="text-primary-600 tracking-widest uppercase mb-2"
                  key={category._id}
                >
                  {category.title}
                </div>
              ))}
            </>
          )}
          <p className="heading-four mb-0">{props.title}</p>
          {/* {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )} */}
          {/* <div>{format(new Date(props.publishedAt), "MMMM d, yyyy")}</div> */}
        </div>
      </div>
    </AniLink>
  );
}

export default BlogPostPreviewGrid;
