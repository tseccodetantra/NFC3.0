import Card from "../Card";
import SectionLayout from "../SectionLayout";

const Journey = () => {
  return (
    <SectionLayout
      Title={"JOURNEY OF NEED FOR CODE"}
      Classname={"venue-section-container built-section"}
    >
      <div
        id="journey"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Card
          heading={"Total Registrations"}
          content={"300+ teams registered"}
        />
        <Card heading={"Total Teams"} content={"70+ teams participated"} />
      </div>
    </SectionLayout>
  );
};

export default Journey;