const mapping: Record<string, string> = {
  'call-initiators': 'call_initiator',
  'call-receivers': 'call_receiver',
  companies: 'company',
  'site-administrators': 'site_administrator',
  'site-owners': 'site_owner',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
