import { PropsWithChildren } from "react";
import ReviewMe from "./ReviewMe";

export default function Faq({
  children,
  question,
}: PropsWithChildren<{ question: string }>) {
  return (
    <ReviewMe id={question}>
      <div className="border border-zinc-600 p-5 pt-6 rounded-md mb-6 text-left relative">
        <h2 className="absolute top-0 left-5 -translate-y-1/2 bg-zinc-900 text-zinc-400 px-3">
          {question}
        </h2>
        <h3>{children}</h3>
      </div>
    </ReviewMe>
  );
}
