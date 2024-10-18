import { useCallback, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import clsx from "clsx";

import { GalleryContext } from "../provider";
import { ElementContext } from "../App";
import type { SplashResponseImage } from "../types";

export default function Gallery() {
  const navigate = useNavigate();
  const { scrollElement } = useContext(ElementContext);
  const { images, fetchImages, setCurrentImage } = useContext(GalleryContext);

  function showDetailsHandler(image: SplashResponseImage) {
    setCurrentImage(image);
    navigate(`/photo/${image.id}`);
  }

  const handleScroll = useCallback(() => {
    if (scrollElement.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement.current;
      if (scrollTop + clientHeight >= scrollHeight - 2) fetchImages();
    }
  }, [fetchImages, scrollElement]);

  useEffect(() => {
    const scroller = scrollElement.current;
    if (scroller) scroller.addEventListener("scroll", handleScroll);
    return () => {
      if (scroller) scroller.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, scrollElement]);

  return (
    <div className="w-fit">
      <span className={clsx("border-b border-[#0e3481]", "w-full my-6", "flex justify-center")} />
      <div
        className={clsx(
          "columns-2 sm:columns-3 lg:columns-4 xl:columns-5",
          "transition-all duration-300 ease-in-out",
          "gap-3 space-y-3",
          "w-fit"
        )}
      >
        {images.map((image: SplashResponseImage) => (
          <div
            key={image.id}
            className={clsx(
              "cursor-pointer",
              "w-fit",
              "overflow-hidden bg-white rounded-md",
              "flex flex-col items-center"
            )}
            onClick={() => showDetailsHandler(image)}
          >
            <LazyLoadImage effect="opacity" src={image.urls.thumb} alt={image.description} />
            <div className={clsx("text-center text-black", "w-40 pb-1")}>
              <p
                className={clsx("text-ellipsis overflow-hidden whitespace-nowrap", "font-semibold")}
              >
                {image.description}
              </p>
              <p>{image.user.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
