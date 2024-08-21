"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import parse from "html-react-parser";

interface Props {
  data: string;
}

const ParseHTML = ({ data }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className={`markdown w-full min-w-full`}>{parse(data)}</div>;
};

export default ParseHTML;
