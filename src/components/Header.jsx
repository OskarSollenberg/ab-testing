const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  return (
    <header className="absolute h-[60px] inset-x-0 top-0 z-50 flex justify-center items-center">
      <nav>
        <ul className="flex gap-[4rem]">
          {navigation.map((navItem) => {
            return <li key={navItem.name}>{navItem.name}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
}
