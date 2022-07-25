import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative inline-flex font-body text-primary-400 hover:text-secondary-400 text-sm uppercase font-medium tracking-wider pb-2 ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div className="relative">
        {text}
        <span className="absolute w-0 group-hover:w-full bottom-0 left-auto group-hover:left-0 right-0 group-hover:right-auto bg-primary-400 h-px transition-all duration-500 ease-in-out"></span>
      </div>
    </Tag>
  );
};

export default Button;
