import SectionLayout from "../SectionLayout";
import { sponsorConfig } from "../../config/sponsor";
import SponsorContainer from "./SponsorContainer";
import SponsorWrapper from "./SponsorWrapper";
import Image from "next/image";

{/*const SponsorWrapper = ({ Img, Name }) => {
  return (
    <div className="card">
      <div className="pic">
        <img
          src={Img}
          alt={`${Name.toUpperCase()} LOGO`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};*/}

const Sponsor = () => {
  const { gold, silver, bronze, inkind, hiringPartner, mediaPartner } = sponsorConfig;

  return (
    <SectionLayout
      Classname={"sponsor-section"}
      Title={"SPONSORS & PARTNERS"}
      id="sponsors"
    >
      <div className="sponsor-container">
        <SponsorContainer Name={gold.Name} Img={gold.Img} Type={gold.Type}>
          {gold.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
        {/* <SponsorContainer
          Name={silver.Name}
          Img={silver.Img}
          Type={silver.Type}
        >
          {silver.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer> */}
        <SponsorContainer
          Name={silver.Name}
          Img={silver.Img}
          // Type={silver.Type}
        >
          {silver.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={inkind.Name}
          Img={inkind.Img}
          // Type={inkind.Type}
        >
          {inkind.Sponsor.map((sponsor) => (
            <SponsorWrapper
              key={sponsor.id}
              Name={sponsor.Name}
              Img={sponsor.Img}
            />
          ))}
        </SponsorContainer>
        {/* <SponsorContainer
          Name={hiringPartner.Name}
          Img={hiringPartner.Img}
          Type={hiringPartner.Type}
          wid={hiringPartner.wid}
        >
          {hiringPartner.Partner.map((partner) => (
            <SponsorWrapper
              key={partner.id}
              Name={partner.Name}
              Img={partner.Img}

            />
          ))}
        </SponsorContainer>
        <SponsorContainer
          Name={mediaPartner.Name}
          Img={mediaPartner.Img}
          Type={mediaPartner.Type}
          wid={mediaPartner.wid}
        >
          {mediaPartner.Partner.map((partner) => (
            <SponsorWrapper
              key={partner.id}
              Name={partner.Name}
              Img={partner.Img}
            />
          ))}
        </SponsorContainer> */}
      </div>
    </SectionLayout>
  );
};

export default Sponsor;
