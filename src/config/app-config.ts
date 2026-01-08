import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "TenvioX FinSight",
  version: packageJson.version,
  copyright: `© ${currentYear}, TenvioX FinSight.`,
  meta: {
    title: "TenvioX FinSight - AI-Powered Financial Announcement Intelligence Platform",
    description:
      "TenvioX FinSight is an advanced financial intelligence dashboard designed for automated information extraction from listed company announcements. It leverages sophisticated AI prompt engineering, offering hierarchical outline management and specialized extraction modes to transform complex financial disclosures into structured, actionable data.",
  },
};
