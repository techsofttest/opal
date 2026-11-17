"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from "react";

interface Contact {
  phone: string | null;
  instagram: string | null;
  linkedin: string | null;
  whatsapp: string | null;
  googleshare: string | null;
  facebook: string | null;
  email: string | null;
  address: string | null;
  map: string | null;
}
interface LayoutResponse {
  contact: Contact | null;
}

interface LayoutContextType {
  layoutData: LayoutResponse | null;
  loading: boolean;
}

const LayoutContext = createContext<LayoutContextType>({
  layoutData: null,
  loading: true,
});

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [layoutData, setLayoutData] = useState<LayoutResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "/api";

    fetch(`${baseUrl}/layout`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Layout request failed with status ${res.status}`);
        }
        return res.json() as Promise<LayoutResponse>;
      })
      .then((layoutRes) => {
        setLayoutData({
          contact: layoutRes.contact ?? null,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Layout Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <LayoutContext.Provider value={{ layoutData, loading }}>
      {children}
    </LayoutContext.Provider>
  );
}

export const useLayoutData = () => useContext(LayoutContext);