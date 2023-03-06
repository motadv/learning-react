import Title from "./Title";
import planets from "../data/planets";
import PlanetCard from "./PlanetCard";

function SolarSystem() {
  const planetList = planets.map((planeta) => (
    <PlanetCard planetName={planeta.name} planetImage={planeta.image} />
  ));

  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <div>{planetList}</div>
    </div>
  );
}

export default SolarSystem;
