export default function Home() {
  return (
    <div className="max-w-5xl gap-10 mx-auto text-left flex pt-25">
      <div className="space-y-5 pt-10">
        <p className="text-cool-cyan">Hola, my name is</p>
        <div className="font-playfair space-y-5">
          <h1 className="font-bold text-7xl">Joaquin Mari.</h1>
          <h2 className="font-semibold text-5xl text-text-muted">
            Software Engineer
          </h2>
        </div>
        <h3 className="text-text-muted">
          I am a last year university student and part time web developer at
          Airbus
        </h3>
      </div>
      <img src="/picture.png" alt="portfolio picture" className="w-100" />
    </div>
  );
}
