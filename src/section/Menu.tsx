import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "../components/Box";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import CardTitle from "../components/CardTitle";
import { assetUrl } from "../config";

const menus = [
  "Specialities",
  "Homestyle Sushi",
  "Steak",
  "With Rice",
  "Cocktails",
  "Wine",
  "Appetizer",
];

const cardMenus = [
  {
    image: assetUrl("assets/sushi10.png"),
    name: "Dragon Sushi",
    description:
      "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
    price: "$50",
  },
  {
    image: assetUrl("assets/sushi12.png"),
    name: "Creamy Sushi",
    description:
      "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
    price: "$50",
  },
  {
    image: assetUrl("assets/sushi11.png"),
    name: "Roll Salmon Sushi",
    description:
      "Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.",
    price: "$50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("Specialities");
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full px-5 flex flex-col gap-5 items-center py-10 lg:px-24 lg:py-20"
    >
      <motion.div variants={itemVariants}><Subtitle>Quality food for you</Subtitle></motion.div>
      <motion.div variants={itemVariants}><Title className="text-4xl">Our Specialities</Title></motion.div>
      <motion.div variants={itemVariants}>
        <Paragraph className="text-center text-xl sm:text-2xl sm:w-2/3 lg:w-full lg:text-lg">
          Authentic food from our restaurant served with high quality ingredients
        </Paragraph>
      </motion.div>
      <motion.div variants={containerVariants} className="flex flex-row flex-wrap gap-4 justify-center lg:justify-between w-full">
        {menus.map((menu) => (
          <motion.div key={menu} variants={itemVariants} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Box active={activeMenu === menu} onClick={() => setActiveMenu(menu)} className="lg:flex-1">
              <p className={`dm-sans-400 text-xl sm:text-2xl lg:text-xl text-nowrap ${activeMenu === menu ? "text-black" : ""}`}>{menu}</p>
            </Box>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div key={activeMenu} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="mt-5 flex flex-col gap-4 justify-center lg:justify-between w-full sm:gap-0">
          {cardMenus.map((item, index) => <MenuCard key={item.name} item={item} index={index} />)}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const MenuCard = ({ item, index }: { item: (typeof cardMenus)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`flex flex-col gap-2 sm:grid ${index === 1 ? "sm:grid-cols-[1.5fr_2fr]" : "sm:grid-cols-[2fr_1.5fr]"}`}
    >
      <motion.div className={`overflow-hidden ${index === 1 ? "sm:order-2" : "sm:order-1"}`} whileHover={{ scale: 1.02 }}>
        <motion.img src={item.image} alt="Card Image" className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} />
      </motion.div>
      <motion.div className={`flex flex-col items-start sm:justify-center gap-2 ${index === 1 ? "sm:order-1" : "sm:order-2 pl-10"} lg:gap-5`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}><CardTitle className="text-2xl lg:text-4xl">{item.name}</CardTitle></motion.div>
        <Paragraph className="lg:w-4/5">{item.description}</Paragraph>
        <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.1, color: "#F5BE32" }}>
          <CardTitle className="text-3xl">{item.price}</CardTitle>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Menu;
