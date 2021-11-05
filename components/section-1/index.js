import React from "react";
import style from "./section-1.module.css";
import HerbicideHub from "../icons/HerbicideHub";
import CompostHub from "../icons/CompostHub";
import SeedHub from "../icons/SeedHub";
import SaplingHub from "../icons/Saplinghub";
import WormGrower from "../icons/WormGrower";
import LogisticHub from "../icons/LogisticHub";
import LocalGrower from "../icons/LocalGrower";
import FertilizerHub from "../icons/FertilizerHub";
import OrganicWaste from "../icons/OrganicWaste";
import PesticideHub from "../icons/PesticideHub";

export default function Section1() {
  return (
    <div className={style.section1}>
      <Items text="Herbicide hub " icon={<HerbicideHub />} />
      <Items text="Compost hub " icon={<CompostHub />} />
      <Items text="Seed hub " icon={<SeedHub />} />
      <Items text="Sapling hub " icon={<SaplingHub />} />
      <Items text="Worm grower " icon={<WormGrower />} />
      <Items text="Logistic hub " icon={<LogisticHub />} />
      <Items text="Local grower  " icon={<LocalGrower />} />
      <Items text="Fertilizer hub " icon={<FertilizerHub />} />
      <Items text="Organic waste  " icon={<OrganicWaste />} />
      <Items text="Pesticide hub " icon={<PesticideHub />} />
    </div>
  );
}

const Items = ({ icon, text }) => {
  return (
    <div className={style.sectionItems}>
      <div>{icon}</div>
      <div style={{ fontSize: "12px" }}>{text}</div>
    </div>
  );
};
