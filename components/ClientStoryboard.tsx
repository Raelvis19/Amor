"use client";

import dynamic from "next/dynamic";

const Storyboard = dynamic(() => import("@/components/Storyboard"), {
  ssr: false,
});

export default function ClientStoryboard() {
  return <Storyboard />;
}