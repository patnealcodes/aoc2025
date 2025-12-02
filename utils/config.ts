export const testConfig = {
  log: false,
};

export const log = (...args: any[]) => {
  if (testConfig.log) {
    console.log(args);
  }
};
