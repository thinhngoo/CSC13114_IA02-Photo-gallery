import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { formatDate } from "date-fns";
import clsx from "clsx";

import { GalleryContext } from "../provider";
import Overlay from "./Overlay.commponent";

export default function ImageDetails() {
  const navigate = useNavigate();
  const { currentImage } = useContext(GalleryContext);

  if (!currentImage) return null;
  return (
    <Overlay onExit={() => navigate("/")}>
      <div className={clsx("sm:rounded-lg overflow-hidden")}>
        <div
          className={clsx("w-full h-12 bg-white", "relative", "flex justify-center items-center")}
        >
          <span className="text-text text-lg font-bold">Image Details</span>
          <button
            className={clsx(
              "absolute top-0 right-0",
              "m-1 h-10 w-16",
              "text-lg text-white",
              "bg-primary",
              "rounded-lg",
              "hover:opacity-60",
              "transition-opacity duration-300 ease-in-out"
            )}
            onClick={() => navigate("/")}
          >
            Close
          </button>
        </div>
        <div
          className={clsx(
            "w-screen sm:max-w-xl lg:max-w-fit lg:w-fit h-[calc(100vh-3rem)] lg:h-[50vw] sm:max-h-[90vh]",
            "flex flex-col lg:flex-row",
            "overflow-y-auto lg:overflow-hidden no-scrollbar"
          )}
        >
          <div
            className={clsx(
              "lg:aspect-square",
              "h-[50vh] lg:h-full",
              "flex justify-center items-center"
            )}
            style={{
              backgroundColor: currentImage.color,
            }}
          >
            <LazyLoadImage
              src={currentImage.urls.full}
              alt={currentImage.description}
              className={clsx(
                currentImage.width > currentImage.height ? "w-full h-auto" : "h-full w-auto"
              )}
            />
          </div>
          <div
            className={clsx("h-full w-full lg:w-[26rem]", "lg:overflow-y-auto no-scrollbar")}
            style={{
              backgroundImage: "linear-gradient(#e8f0ff 0%, #f0f2f5 52.08%)",
            }}
          >
            <div className={clsx("pt-5 pb-8", "text-black", "flex flex-col items-center")}>
              <h2 className={clsx("text-xl font-bold text-center lg:text-start", "px-3 mb-3")}>
                {currentImage.description || "Untitled"}
              </h2>
              <ul className="w-[26rem] px-3">
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Author</span>: {currentImage.user.name}
                </li>
                <li className="text-sm">
                  <span className="font-semibold">Description</span>: {currentImage.alt_description}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Create at</span>:{" "}
                  {formatDate(currentImage.created_at, "MMMM dd, yyyy")}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Updated at</span>:{" "}
                  {formatDate(currentImage.updated_at, "MMMM dd, yyyy")}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Promoted at</span>:{" "}
                  {formatDate(currentImage.promoted_at, "MMMM dd, yyyy")}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Location</span>:{" "}
                  {currentImage.location.name
                    ? `${currentImage.location.name}, ${currentImage.location.city}, ${currentImage.location.country}`
                    : "Unknown"}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Likes</span>: {currentImage.likes}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Views</span>: {currentImage.views}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Downloads</span>: {currentImage.downloads}
                </li>
                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Size</span>: {currentImage.width}x
                  {currentImage.height}
                </li>

                <li className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  <span className="font-semibold">Slug</span>: {currentImage.slug}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}
