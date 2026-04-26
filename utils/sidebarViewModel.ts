import { AccessLevel, navGroupsConfig, type NavGroupConfig } from "@/config/sidebar";

export type NavItemViewModel = {
  id: number;
  name: string;
  href: string;
  access: AccessLevel | null;
  active: boolean;
  displayId: string;
  showAccessBadge: boolean;
};

export type NavGroupViewModel = {
  id: string;
  groupName: string;
  items: NavItemViewModel[];
};

export function isNavItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function buildSidebarViewModel(
  pathname: string,
  groups: NavGroupConfig[] = navGroupsConfig
): NavGroupViewModel[] {
  return groups.map((group) => ({
    id: group.id,
    groupName: group.groupName,
    items: group.items.map((item) => ({
      ...item,
      active: isNavItemActive(pathname, item.href),
      displayId: item.id.toString().padStart(3, "0"),
      showAccessBadge:
        item.access === AccessLevel.PUBLIC ||
        item.access === AccessLevel.FREE_WITH_LOGIN
    }))
  }));
}
