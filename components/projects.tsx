"use client";

import React, { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "brand smash",
    tagline: "discovering & ranking new consumer brands",
    link: "https://brands.maini.dev/",
    date: "jun 2024",
    status: "completed",
  },
  {
    id: 2,
    title: "raises & pivots",
    tagline: "board game about the indian startup ecosystem",
    link: "https://x.com/kaavyya/status/1817182342739558834",
    date: "jul 2024",
    status: "completed",
  },
  {
    id: 3,
    title: "blinkit button",
    tagline: "anything on blinkit with a tap of a button",
    link: "https://blinkit.maini.dev/",
    date: "sep 2024",
    status: "completed",
  },
  {
    id: 4,
    title: "the chai game",
    tagline: "introducing our investment in dorje teas",
    link: "https://chai.untitledventures.xyz/",
    date: "oct 2024",
    status: "completed",
  },
  {
    id: 5,
    title: "dhanlakshmi sweets",
    tagline: "diwali gift from the team at untitled ventures",
    link: "https://dhanlakshmisweets.com/",
    date: "nov 2024",
    status: "completed",
  },
  {
    id: 6,
    title: "giveaway with 🎮 consumer brand",
    date: "dec 2024",
    status: "current",
  },
  {
    id: 7,
    title: "???",
    date: "dec 2024",
    status: "upcoming",
  },
  {
    id: 8,
    title: "???",
    date: "jan 2025",
    status: "upcoming",
  },
];

const ProjectList = () => {
  const currentProjectRef = useRef<HTMLDivElement>(null);
  const projectDrop = new Date(2024, 11, 4);
  const now = new Date();
  const diff = projectDrop.getTime() - now.getTime();

  const [countdown, setCountdown] = useState({
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - projectDrop.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        setCountdown({ days, hours, minutes });
      }
    }, 1000 * 60);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (currentProjectRef.current) {
      currentProjectRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-5 font-mono lowercase font-normal relative">
      {/* Wrapper for sticky sections */}
      <div className="sticky top-5 bg-black z-10 pb-2">
        {/* Logo Section */}
        <div className="text-center">
          <div className="inline-block bg-red-600 px-6 py-3 mb-4">
            <h1 className="text-2xl italic m-0 font-bold">
              drops by untitled ventures
            </h1>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="max-w-xl mx-auto pt-8 pb-24">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              ref={project.status === "current" ? currentProjectRef : null}
              className={`
              flex items-start mb-6 p-2 cursor-pointer
              hover:bg-white/10 transition-colors
              ${project.status === "completed" ? "opacity-50" : ""}
              ${project.status === "current" ? "text-red-600" : ""}
            `}
            >
              <div className="w-6 mr-4 mt-1 text-right text-sm opacity-70">
                {project.id}.
              </div>
              <div>
                <h2
                  className={
                    `mb-1 ${project.status === "current"}`
                      ? "text-lg"
                      : "text-base"
                  }
                >
                  {project.title}
                </h2>
                {project.status === "current" ? (
                  <div className="text-lg tracking-wider">
                    drops in{" "}
                    <span className="text-red-600 px-1">{countdown.days}</span>d
                    <span className="text-red-600 animate-pulse">:</span>
                    <span className="text-red-600 px-1">
                      {countdown.hours.toString().padStart(2, "0")}
                    </span>
                    h<span className="text-red-600 animate-pulse">:</span>
                    <span className="text-red-600 px-1">
                      {countdown.minutes.toString().padStart(2, "0")}
                    </span>
                    m
                  </div>
                ) : (
                  <div className="text-sm opacity-70 mb-1.5">
                    {project.date}
                  </div>
                )}
                {project.tagline && (
                  <div className="text-xs opacity-50 italic">
                    {project.tagline}
                  </div>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent py-8">
        <div className="max-w-xl mx-auto px-5 text-center">
          <a
            className="bg-red-600 hover:bg-red-700 transition-colors px-6 py-3 text-white text-xs font-mono lowercase rounded rounded-full"
            href="https://chat.whatsapp.com/CAXcvkkL1TAC0QfGxXJ62n"
            target="_blank"
            rel="noopener noreferrer"
          >
            subscribe for future drops
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
