export interface ButtonProps {
  buttonLabel: string;
  buttonSize: string;
  buttonBackgroundColor: string;
  action: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {}
