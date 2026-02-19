import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header className="px-10 py-5 flex items-center justify-between border-b border-b-gray-200 mb-5">
        <h2 className="text-blue-600 font-bold text-lg">react router</h2>
        <nav>
          <menu className="flex gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Posts</NavLink>
            </li>
          </menu>
        </nav>
      </header>
      <main className="container mx-auto py-12">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
