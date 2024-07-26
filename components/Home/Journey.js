import Card from "../Card";
import SectionLayout from "../SectionLayout";

const Journey = () => {
  return (
    <SectionLayout
      Title={"JOURNEY OF NEED FOR CODE 2.0"}
      Classname={"venue-section-container built-section"}
    >
      <div
        id="journey"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        <Card
          heading={"Total Registrations"}
          content={"1300+ registered"}
        />
        <Card heading={"Total Participants"} content={"350+ participated"} />
      </div>
    </SectionLayout>
  );
};

export default Journey;