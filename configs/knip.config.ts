import { KnipConfig } from "knip";

const config: KnipConfig = {
    // Exports referenced only inside their own module are implementation details.
    ignoreExportsUsedInFile: true,
    // Package exports in package.json identify src/index.ts as the public entry.
    project: ["src/**/*.{ts,tsx,css}"],
};

export default config;
