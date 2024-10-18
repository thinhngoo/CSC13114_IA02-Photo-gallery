import clsx from "clsx";

export default function Heading() {
  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        "transition-all duration-300 ease-in-out",
        "max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
      )}
    >
      <h1 className="text-4xl">lightGallery</h1>
      {/* prettier-ignore */}
      <p className={clsx("tracking-wide", "mt-2 mb-4")}>
        Introduction Welcome to our Photo Gallery! Discover a world of captivating images, expertly captured to evoke emotions and inspire your imagination. Our gallery showcases a diverse collection of photographs, ranging from breathtaking landscapes to stunning portraits and creative abstract art.
      </p>
      <a
        className={clsx(
          "rounded-md",
          "px-4 py-2",
          "text-sm",
          "border border-text",
          "hover:bg-text/[.1]",
          "transition duration-300"
        )}
        href="https://github.com/thinhngoo/CSC13114_IA02-Photo-gallery"
      >
        View source on GitHub
      </a>
    </div>
  );
}
