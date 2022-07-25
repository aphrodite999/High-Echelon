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
      className={`group font-semibold inline-flex items-center justify-center space-x-4 ${
        altStyle
          ? `text-white`
          : `text-gray-900 hover:text-primary-400 group-hover:text-primary-400`
      } ${className}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      <div>{text}</div>

      <i className="far fa-arrow-right text-xl relative left-0 group-hover:left-2 transition-all duration-300 ease-linear"></i>
    </Tag>
  );
};

export default Button;
