import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
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
      className={`group relative inline-flex font-body text-gray-900 hover:text-gray-900 font-bold tracking-wider uppercase px-3 no-underline ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <span className="z-10">{text}</span>
      <span className="absolute h-full w-2 left-0 bg-primary-400 group-hover:w-full transition-all duration-500 ease-in-out"></span>
    </Tag>
  );
};
export default Button;
