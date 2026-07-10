import { SiteNav } from "@/components/site-nav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 flex-col">
      <SiteNav />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
