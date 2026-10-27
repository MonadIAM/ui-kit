import { KnipConfig } from "knip";

const config: KnipConfig = {
    ignoreExportsUsedInFile: true,
    ignoreBinaries: ["gitleaks"],
    project: ["src/**/*.{ts,tsx}"],
};

export default config;
