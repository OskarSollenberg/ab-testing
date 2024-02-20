import image from "../assets/colors.webp";

export default function VariantB() {
  return (
    <section className={`w-screen max-h-[40rem] max-w-[90rem]`}>
      <div className="overflow-hidden">
        <img
          className="w-[100%] max-h-[40rem] object-cover filter brightness-90 contrast-110 grayscale-10"
          src={image}
          alt="Image filled with soft colors with a diamond-texture on top"
          title="Colorful image with diamond texture"
        />
      </div>
    </section>
  );
}
