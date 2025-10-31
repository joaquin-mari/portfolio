import CyanButton from "../utils/CyanButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen w-full flex-col text-center gap-5 py-20"
    >
      <span className="text-cool-cyan text-inter text-xl">
        o.4 What's next?
      </span>
      <h2 className="font-playfair text-6xl font-bold">Contact Me</h2>
      <div className="w-180">
        <p className="text-gray-border text-2xl mb-10">
          I am looking for new challenges and opportunities so please feel free
          to contact me with any idea, question or thing you would like to share
          with me!
        </p>
      </div>
      <CyanButton text={"Say Hello"} size="lg" />
    </section>
  );
}
