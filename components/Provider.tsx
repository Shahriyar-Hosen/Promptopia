"user client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IProviderProps {
  children: ReactNode;
  session?: Session | null;
}

const Provider = ({ children, session }: IProviderProps) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
