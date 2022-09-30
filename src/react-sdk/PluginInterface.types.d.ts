export interface ThemeInterface {
  accent: string;
  accentDanger: string;
  accentWarning: string;
  text: string;
  bg: string;
}

export interface UserInterface {
  id: string;
  name: string;
}

// or just EventEmitter??
export interface EventsInterface {
  on(event: string, callback: Function): void;
  off(event: string, callback: Function): void;
  emit(event: string, ...args: any[]): void;
}

export interface WidgetItem {
  icon: string; // maybe separate fields for icon name and url?
  tooltip: string;
  onClick: (e: MouseEventHandler<HTMLButtonElement>) => void;
}

export interface WidgetsInterface {
  /**
   * Add an item to the widget list, the order is undetermined.
   */
  item?: WidgetItem;

  /**
   * Modify the widget list by probably adding your item(s) to it,
   * potentially on the preferred position.
   */
  extendList?: (widgets: WidgetItem[]) => WidgetItem[];
}

export interface PluginSDKInterface {
  currentUser: UserInterface;

  events: EventsInterface;

  widgets: WidgetsInterface;

  // Temporary, in this way
  init: () => void;

  // theme: ThemeInterface;
  // config: object;
  // appId: string;
  // isSpaceAdmin?: boolean;
  // spaceId?: string;
}
