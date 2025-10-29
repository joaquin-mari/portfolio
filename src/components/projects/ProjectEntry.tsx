import CyanButton from "../utils/CyanButton";

export default function ProjectEntry() {
  return (
    <div className="text-end  max-w-xl space-y-5 ml-auto mt-20">
      <span className="text-cool-cyan font-recursive text-xl">
        Bachelor Thesis
      </span>
      <h3 className="font-playfair text-5xl font-bold">
        ML in the Health Sector
      </h3>
      <div className="bg-soft-gray p-5 text-lg">
        <p>
          Training of Machine Learning to help identify dangerous electrical
          signals in muscles in order to help diagnose dangerous Neurological
          illnesses This project is being performed in cooperation with Augsburg
          Hospital and is the work of my bachelor thesis
        </p>
      </div>
      <ul className="flex text-center max-w-lg ml-auto">
        <li className="flex-1" key={1}>
          ML
        </li>
        <li className="flex-1" key={2}>
          Data Anlysis
        </li>
        <li className="flex-1" key={3}>
          Pandas
        </li>
        <li className="flex-1" key={4}>
          Signal Processing
        </li>
      </ul>
      <CyanButton text={"Learn More"} />
    </div>
  );
}
