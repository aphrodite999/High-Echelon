import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import { Figure } from "./Figure";

const serializers = {
  types: {
    /* eslint-disable-next-line react/display-name */
    authorReference: ({ node }) => <span>{node.author.name}</span>,
    mainImage: Figure,
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return <YouTube videoId={id} />;
    },
  },
};

export default serializers;
