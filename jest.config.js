/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    forceExit: true,
    clearMocks: true,
    resetMocks: true,
    restoreMocks: true,
    clearMocks: true,
    setupFilesAfterEnv: ["<rootDir>/test/setup.js"]
  };
};
