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

export interface PluginSDKInterface {
  currentUser: UserInterface;
  events: EventsInterface;
  // theme: ThemeInterface;
  // config: object;
  // appId: string;
  // isSpaceAdmin?: boolean;
  // spaceId?: string;
}
