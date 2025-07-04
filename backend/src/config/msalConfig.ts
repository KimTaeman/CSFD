import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.MICROSOFT_CLIENT_ID || '',
    authority: `https://login.microsoftonline.com/${process.env.MICROSOFT_TENANT_ID}`,
    clientSecret: process.env.MICROSOFT_CLIENT_SECRET || '',
  },
};

const msalClient = new ConfidentialClientApplication(msalConfig);

export default msalClient;
