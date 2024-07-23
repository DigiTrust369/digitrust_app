export default function Button({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <button className="rounded-[10px] bg-[#ed1c24] px-4 pt-[18px] pb-4 text-white duration-200 hover:bg-[#ed1c24]/85 xl:px-6">
      {children}
    </button>
  );
}
