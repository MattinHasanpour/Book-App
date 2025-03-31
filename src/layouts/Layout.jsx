import { FaHeartPulse } from "react-icons/fa6";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className="text-white flex text-center items-center justify-between bg-gray-900 h-14 mb-10 rounded-md">
        <h1 className="text-3xl">
          Book <span className="text-blue-400">App</span>
        </h1>
        <p className="text-sm text-gray-400">
          <span className="text-blue-400 text-xl">React.js</span>{" "}
          <span className="text-white text-2xl">|</span> Full Course
        </p>
      </header>
      {children}
      <footer className="text-center bg-gray-900 text-white rounded-md shadow-2xl">
        <p className="py-10 flex justify-center items-center gap-2">
          Developed by <a href="https://instagram.com/matinhasanpour_">Matin</a>
          <FaHeartPulse className="size-5 text-blue-400 hover:text-red-500 cursor-pointer" />
        </p>
      </footer>
    </>
  );
}

export default Layout;
