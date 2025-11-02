import CyanButton from "../utils/CyanButton";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen w-full flex-col text-center lg:gap-5 sm:gap-8 py-20"
    >
      <span className="text-cool-cyan text-inter lg:text-xl sm:text-4xl">
        o.4 What's next?
      </span>
      <h2 className="font-playfair lg:text-6xl sm:text-9xl font-bold">
        Contact Me
      </h2>
      <div className="w-180">
        <p className="text-gray-border lg:text-2xl sm:text-4xl mb-10">
          I am looking for new challenges and opportunities so please feel free
          to contact me with any idea, question or thing you would like to share
          with me!
        </p>
      </div>
      <a
        href="mailto:joaquin.mari.marcos@gmail.com.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CyanButton text="Say Hello" size="lg" />
      </a>
    </section>
  );
}
