interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Site Owner'],
  customerRoles: [],
  tenantRoles: ['Site Owner', 'Site Administrator'],
  tenantName: 'Company',
  applicationName: 'Call Up ',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage Company registration', 'Invite Site Administrators'],
  getQuoteUrl: 'https://app.roq.ai/proposal/14693938-34fd-4667-ad46-fb323cd3e73f',
};
