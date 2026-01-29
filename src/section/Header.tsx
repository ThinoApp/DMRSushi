import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import { useState } from "react";
import LinkItem from "../components/LinkItem";

const menus = ["Menu", "Fine Dining", "About", "Contact"];

const Header = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};

const HeaderDesktop = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative hidden lg:flex items-center justify-between z-50"
    >
      <motion.img
        src="/assets/logo.png"
        alt="logo"
        className="size-15"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <ul className="flex items-center gap-4 flex-wrap justify-around sm:gap-10">
        {menus.map((menu, index) => (
          <motion.div
            key={menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            whileHover={{ y: -3, scale: 1.05 }}
            className="relative group"
          >
            <LinkItem className="sm:text-lg transition-colors duration-300 group-hover:text-secondary">
              {menu}
            </LinkItem>
            <motion.div
              className="absolute -bottom-1 left-0 h-[2px] bg-secondary"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </ul>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          btnType="outline"
          lined={true}
          className="lg:px-5 lg:py-2"
          textClassName="lg:text-base"
        >
          RESERVATION
        </Button>
      </motion.div>
    </motion.div>
  );
};

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" absolute top-2 left-0 px-5 z-10 w-full lg:hidden flex flex-row justify-between items-center">
      <motion.img
        src="/assets/logo.png"
        alt="Logo"
        className="size-14 object-cover sm:size-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      />
      <AnimatePresence mode="wait">
        {!isOpen && (
          <motion.div
            key="menu-icon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
            whileTap={{ scale: 0.9 }}
          >
            <MenuIcon
              onClick={() => setIsOpen(true)}
              className=" text-white sm:size-10 cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-screen w-full px-5 py-2 bg-black/50 backdrop-blur-xs backdrop-saturate-50"
          >
            <motion.img
              src="/assets/logo.png"
              alt="Logo"
              className="size-14 object-cover sm:size-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            />
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3 }}
              className="absolute top-5 right-5"
              whileTap={{ scale: 0.9 }}
            >
              <XIcon
                onClick={() => setIsOpen(false)}
                className="text-white sm:size-10 cursor-pointer"
              />
            </motion.div>
            <ul className="flex flex-col items-center gap-10 mt-10">
              {menus.map((menu, index) => (
                <motion.li
                  key={menu}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ x: 10 }}
                  className="list-none"
                >
                  <LinkItem className="py-2 border-b border-b-divider-1 sm:text-4xl">
                    {menu}
                  </LinkItem>
                </motion.li>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  btnType="outline"
                  lined={true}
                  textClassName="sm:text-4xl sm:px-5 sm:py-3"
                >
                  RESERVATION
                </Button>
              </motion.div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
