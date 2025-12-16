export const metadata = {
  title: "VESF™ SaaS",
  description: "VAN Early Signal Framework"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
