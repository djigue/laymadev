"use client";

import Link from "next/link";
import { usePageTransition } from "@/context/TransitionProvider";

export default function TransitionLink({
  href,
  className,
  children,
  ...props
}) {
  const { navigate } = usePageTransition();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
