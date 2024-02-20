import image from "../assets/colors.webp";

export default function VariantB() {
  return (
    <section className={`w-screen overflow-hidden`}>
      <img
        className="w-full h-[40rem]"
        src={image}
        alt="Image filled with soft colors with a diamond-texture on top"
        title="Colorful image with diamond texture"
      />
    </section>
  );
}
