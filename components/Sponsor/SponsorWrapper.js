import Image from "next/image";
import { useRef, useEffect } from "react";

const SponsorWrapper = ({ Img, Name }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 20;
      const y = (e.clientY - top - height / 2) / 20;
      card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="pic">
        <Image
          src={Img}
          alt={`${Name.toUpperCase()} LOGO`}
          width={100}
          height={100}
          className="card-img"
        />
      </div>
    </div>
  );
};

export default SponsorWrapper;