import Title from "./Title";
import MissionCard from "./MissionCard";
import missions from "../data/missions";
function Missions() {
  const missionList = missions.map((miss) => (
    <MissionCard
      name={miss.name}
      year={miss.year}
      country={miss.country}
      destination={miss.destination}
    />
  ));

  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <div>{missionList}</div>
    </div>
  );
}

export default Missions;
