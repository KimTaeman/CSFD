import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';
import config from './config';

const msalConfig: Configuration = {
  auth: {
    clientId: config.clientId,
    authority: config.authority,
    clientSecret: config.clientSecret,
  },
};

const msalClient = new ConfidentialClientApplication(msalConfig);

export default msalClient;
