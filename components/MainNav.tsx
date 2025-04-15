export type NavItemProps = {
  title: string;
  link: string;
};

function MainNavItem({ link, title }: NavItemProps) {
  return <a href={link}>{title}</a>;
}

type MainNavProps = {
  items: NavItemProps[];
};
export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex">
      {items.map((item, i) => (
        <MainNavItem key={i} {...item} />
      ))}
    </div>
  );
}
