// design.js
import React from "react";

export const Design = ({ position }) => {
  const style = {
    top: position?.top,
    left: position?.left,
    // right: position?.right,
    // bottom: position?.bottom,
  };

  const smStyle = {
    "--smtop": position?.smtop,
    "--smleft": position?.smleft,
    // "--smright": position?.smright,
    // "--smbottom": position?.smbottom,
  };

  return (
    <div
      className="max-w-md mx-auto p-6 absolute z-[1] transition-all duration-500"
      style={{
        ...style,
        ...smStyle,
      }}
    >
      <div className="relative w-[154px] h-[154px] grid grid-cols-4 grid-rows-4">
        {/* Row 1 */}
        <div></div>
        <div></div>
        <div className="border-t-2 border-l-2 border-[var(--accent)]"></div>
        <div className="border-t-2 border-r-2 border-[var(--accent)]"></div>

        {/* Row 2 */}
        <div className="border-t-2 border-l-2 border-[var(--accent)]"></div>
        <div className="border-t-2 border-[var(--accent)]"></div>
        <div className="border-t-2 border-r-2 border-l border-[var(--accent)]"></div>
        <div className="border-r-2 border-[var(--accent)]"></div>

        {/* Row 3 */}
        <div className="border-l-2 border-[var(--accent)]"></div>
        <div className="border-t-2 border-l-2 border-b-2 border-[var(--accent)]"></div>
        <div className="border-b-2 border-l-2 border-t-2 border-[var(--accent)]"></div>
        <div className="border-r-2 border-b-2 border-[var(--accent)]"></div>

        {/* Row 4 */}
        <div className="border-l-2 border-b-2 border-[var(--accent)]"></div>
        <div className="border-b-2 border-[var(--accent)]"></div>
        <div className="border-l-2 border-[var(--accent)]"></div>
        <div></div>
      </div>
    </div>
  );
};


export const Dots = ({position}) => {
  const style = {
    position: "absolute",
    right: position?.right,
    bottom: position?.bottom,
    smright: position?.smright,
    smbottom: position?.smbottom
  };
  return (
    <div style={style} className="w-fit mx-auto p-10 z-3">
      <div className="grid grid-cols-5 grid-rows-6 md:gap-[12px] gap-[9px]">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-[var(--accent)] rounded-full"
          ></div>
        ))}
      </div>
    </div>
  );
};