import clsx from "clsx";
import { useEffect, useState } from "react";
import ReviewMe from "./ReviewMe";

const flavorColors = [
  "text-emerald-300",
  "text-orange-300",
  "text-sky-300",
  "text-violet-300",
  "text-rose-300",
];
const flavorBackgrounds = [
  "bg-emerald-900",
  "bg-orange-900",
  "bg-sky-900",
  "bg-violet-900",
  "bg-rose-900",
];

export default function Project({
  name,
  logo,
  description,
  github,
  site,
  flavor,
}: {
  name: string;
  logo?: string;
  description: string;
  github?: string;
  site?: string;
  flavor?: string;
}) {
  const [flavorColor, setFlavorColor] = useState([]);

  useEffect(() => {
    const daRandomIndex = Math.floor(Math.random() * flavorColors.length);
    setFlavorColor([
      flavorColors[daRandomIndex],
      flavorBackgrounds[daRandomIndex],
    ]);
  }, []);

  return (
    <ReviewMe id={name}>
      <div
        className={clsx(
          "border",
          "border-zinc-600",
          "rounded-lg",
          "p-5",
          "flex",
          "items-start",
          "relative",
          "h-full",
          flavor && "pt-6"
        )}
      >
        {flavor && (
          <h4
            className={clsx(
              "text-sm",
              "rounded-full",
              "inline-block",
              "px-2",
              "absolute",
              "top-0",
              "left-5",
              "-translate-y-1/2",
              ...flavorColor
            )}
          >
            {flavor}
          </h4>
        )}

        {logo && <img src={logo} alt={name} className="mr-5 rounded-md w-20" />}

        <div className="text-left">
          <h3 className="text-3xl font-bold mb-2">{name}</h3>

          <p className="text-md mb-2">{description}</p>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {site && (
            <>
              {" "}
              &middot;{" "}
              <a href={site} target="_blank" rel="noopener noreferrer">
                Site
              </a>
            </>
          )}
        </div>
      </div>
    </ReviewMe>
  );
}
