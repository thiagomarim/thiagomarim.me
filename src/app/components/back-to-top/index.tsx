"use client";

import { useState, useCallback, useEffect } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";

export function BackToTop() {
  const [show, setShow] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {show && (
        <div className="fixed right-4 bottom-4 z-20">
          <button
            onClick={scrollToTop}
            className="bg-[#121214] border-2 border-[#323238] rounded-lg p-2"
          >
            <TbArrowNarrowUp size={20} />
          </button>
        </div>
      )}
    </>
  );
}
