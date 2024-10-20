export default function Layout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return <div className="w-full h-full flex flex-row flex-1">{children}</div>;
}
