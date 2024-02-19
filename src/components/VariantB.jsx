import image from "../assets/colors.webp";

export default function VariantB() {
  return (
    <section className={`w-[40%] max-w-[30rem]`}>
      <img
        src={image}
        alt="Image filled with soft colors with a diamond-texture on top"
        title="Colorful image with diamond texture"
      />
    </section>
  );
}
