import '@/styles/tailwind.css';

export const metadata = {
  title: 'Edward Rodriguez | Operations Systems Portfolio',
  description: 'Software-minded operations portfolio focused on reliability, scheduling, compliance, and systems thinking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#071419] text-white antialiased">{children}</body>
    </html>
  );
}
