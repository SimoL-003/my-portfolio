import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons/icons";

export default function SliderSection({ imgs, current, setCurrent }) {
  const goPrev = () =>
    setCurrent(current === 0 ? imgs.length - 1 : current - 1);

  const goNext = () => setCurrent((current + 1) % imgs.length);

  return (
    <div className="lg:w-1/2 relative">
      <div className="overflow-x-hidden relative h-full flex items-center">
        {/* Images */}
        <div
          className="flex transition-transform duration-700 max-h-[500px]"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {imgs.map((src, i) => (
            <img
              key={i}
              src={src}
              className="w-full shrink-0 object-contain"
              alt={`Screenshot ${i + 1}`}
            />
          ))}
        </div>

        {/* Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
          onClick={goPrev}
        >
          <FontAwesomeIcon icon={icons.chevronLeft} />
        </button>

        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
          onClick={goNext}
        >
          <FontAwesomeIcon icon={icons.chevronRight} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {imgs.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "bg-accent-primary scale-110"
                  : "bg-text-tertiary"
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
