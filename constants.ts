import { LinkItem, Quote } from './types';

// Using high-quality Wikimedia Commons SVGs for official emblems
export const LEFT_LINKS: LinkItem[] = [
  {
    title: "Indian Army",
    url: "https://indianarmy.nic.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Indian_Army.svg/330px-Flag_of_Indian_Army.svg.png",
    altText: "Emblem of the Indian Army"
  },
  {
    title: "Indian Navy",
    url: "https://indiannavy.gov.in/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Naval_Ensign_of_India.svg/330px-Naval_Ensign_of_India.svg.png",
    altText: "Crest of the Indian Navy"
  },
  {
    title: "Indian Air Force",
    url: "https://indianairforce.nic.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Air_Force_Ensign_of_India.svg/330px-Air_Force_Ensign_of_India.svg.png",
    altText: "Logo of the Indian Air Force"
  },
  {
    title: "Indian Coast Guard",
    url: "https://indiancoastguard.gov.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Indian_Coast_Guard_flag.svg/330px-Indian_Coast_Guard_flag.svg.png",
    altText: "Logo of the Indian Coast Guard"
  }
];

export const RIGHT_LINKS: LinkItem[] = [
  {
    title: "Rashtrapati Bhavan",
    url: "https://www.rashtrapatibhavan.gov.in/",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg", // National Emblem
    altText: "National Emblem of India"
  },
  {
    title: "Prime Minister's Office",
    url: "https://www.pmindia.gov.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg", // Uses National Emblem
    altText: "Emblem of India for PMO"
  },
  {
    title: "Chief of Defence Staff",
    url: "https://www.mod.gov.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Flag_of_Chief_of_Defence_Staff_%28India%29.svg/330px-Flag_of_Chief_of_Defence_Staff_%28India%29.svg.png", // Integrated Defence Staff Emblem
    altText: "Emblem of the Integrated Defence Staff"
  },
  {
    title: "Gallantry Awards",
    url: "https://gallantryawards.gov.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flag_of_Indian_Armed_Forces.svg/330px-Flag_of_Indian_Armed_Forces.svg.png", // Param Vir Chakra
    altText: "Param Vir Chakra Medal"
  }
];

export const PATRIOTIC_QUOTES: Quote[] = [
  { text: "Service Before Self" },
  { text: "Nation First, Always First" },
  { text: "Unity, Integrity, Sovereignty" }
];
