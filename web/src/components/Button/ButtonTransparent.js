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
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden border-b border-primary-100 h-[46px] inline-flex items-center justify-center text-center font-body font-semibold no-underline text-xl whitespace-nowrap ${
        altStyle
          ? "text-primary-100 hover:text-gray-900 bg-white/30 hover:bg-white border-white"
          : "text-primary-100 hover:text-gray-900 bg-white/30 hover:bg-primary-300 border-primary-100 hover:border-primary-300"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={altStyle}
    >
      {text}
      {icon && (
        <i
          className={`ml-2 text-lg relative left-0 group-hover:left-2 transition-all duration-300 ease-linear ${
            altStyle ? "text-white" : "text-gray-900"
          } ${icon}`}
        ></i>
      )}
    </Tag>
  );
};

export default Button;
