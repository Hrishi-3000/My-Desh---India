import { LinkItem, Quote } from './types';

// Using high-quality Wikimedia Commons SVGs for official emblems
export const LEFT_LINKS: LinkItem[] = [
  {
    title: "Indian Army",
    url: "https://indianarmy.nic.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/3/33/Indian_Army_emblem.svg",
    altText: "Emblem of the Indian Army"
  },
  {
    title: "Indian Navy",
    url: "https://indiannavy.nic.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/69/Indian_Navy_Crest.svg",
    altText: "Crest of the Indian Navy"
  },
  {
    title: "Indian Air Force",
    url: "https://indianairforce.nic.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Indian_Air_Force_Logo_%282%29.svg",
    altText: "Logo of the Indian Air Force"
  },
  {
    title: "Indian Coast Guard",
    url: "https://indiancoastguard.gov.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Indian_Coast_Guard_logo.svg",
    altText: "Logo of the Indian Coast Guard"
  }
];

export const RIGHT_LINKS: LinkItem[] = [
  {
    title: "Rashtrapati Bhavan",
    url: "https://rashtrapatisachivalaya.gov.in",
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
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/0/07/IDS_Emblem.svg", // Integrated Defence Staff Emblem
    altText: "Emblem of the Integrated Defence Staff"
  },
  {
    title: "Gallantry Awards",
    url: "https://gallantryawards.gov.in",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Param_Vir_Chakra_medal.svg", // Param Vir Chakra
    altText: "Param Vir Chakra Medal"
  }
];

export const PATRIOTIC_QUOTES: Quote[] = [
  { text: "Service Before Self" },
  { text: "Nation First, Always First" },
  { text: "Unity, Integrity, Sovereignty" }
];