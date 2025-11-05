export default function Home() {
  return (
    <section className="w-full flex justify-center min-h-screen">
      <div className="max-w-5xl mx-auto text-left flex sm:pt-35 lg:pt-25 sm:items-center sm:flex-col lg:flex-row sm:gap-60 lg:gap-10">
        <div className="space-y-5 lg:pt-10 sm:pt-30">
          <p className="text-cool-cyan sm:text-2xl lg:text-base">
            Hola, my name is
          </p>
          <div className="font-playfair space-y-5">
            <h1 className="font-bold lg:text-7xl sm:text-8xl">Joaquin Mari.</h1>
            <h2 className="font-semibold lg:text-5xl sm:text-7xl text-text-muted">
              Software Engineer.
            </h2>
          </div>
          <h3 className="text-text-muted lg:text-base sm:text-xl">
            I am a last year university student and part time web developer at
            Airbus
          </h3>
        </div>
        <img
          src="/joaquin-mari.png"
          alt="portfolio picture"
          className="lg:w-100 lg:h-100 sm:w-150 sm:lg-150"
        />
      </div>
    </section>
  );
}
