import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default {
  backendHost: publicRuntimeConfig?.backendHost,
};
