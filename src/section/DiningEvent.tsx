import { motion } from "framer-motion";
import Box from "../components/Box";
import CardTitle from "../components/CardTitle";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { assetUrl } from "../config";

const diningMenus = [
  {
    image: assetUrl("assets/finedining2.png"),
    name: "Fine Dining",
    description: "Bottle of Champagne Fine Sushi Tower For 2+ Dessert",
    price: "$500",
  },
  {
    image: assetUrl("assets/finedining.png"),
    name: "Gold Dining ",
    description: `Bottle of Champagne
Secret Menu Sushi For 2+
Dessert`,
    price: "$1000",
  },
  {
    image: assetUrl("assets/luxurybg2.png"),
    name: "Royalty Dinning",
    description: `Bottle of Luxury Champagne
Special Menu Sushi For 2+
Royal Dessert`,
    price: "$1500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const DiningEvent = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full px-5 flex flex-col gap-5 items-center py-10 border-t border-t-divider-1/20 lg:px-24 lg:py-20"
    >
      <motion.div variants={itemVariants}><Subtitle>Choose your event</Subtitle></motion.div>
      <motion.div variants={itemVariants}><Title className="text-4xl">Dining Events</Title></motion.div>
      <motion.div variants={itemVariants}>
        <Paragraph className="text-center text-xl sm:text-2xl sm:w-2/3 lg:w-full lg:text-lg">
          We provide dining event for your special day with your important people{" "}
        </Paragraph>
      </motion.div>
      <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Box active={true} className="lg:flex-1"><p className="dm-sans-400 text-xl sm:text-2xl lg:text-xl text-nowrap text-black">Private Events</p></Box>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Box active={false} className="lg:flex-1"><p className="dm-sans-400 text-xl sm:text-2xl lg:text-xl text-nowrap">Corporate Events</p></Box>
        </motion.div>
      </motion.div>
      <div className="mt-5 flex flex-col gap-10 justify-center lg:justify-between w-full sm:gap-0">
        {diningMenus.map((item, index) => <DiningCard key={item.name} item={item} index={index} />)}
      </div>
    </motion.div>
  );
};

const DiningCard = ({ item, index }: { item: (typeof diningMenus)[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className={`h-[50vh] sm:h-auto relative flex flex-col gap-2 sm:flex-row-reverse sm:items-center ${index === 1 ? "sm:flex-row!" : "sm:flex-row-reverse"}`}
    >
      <motion.div className="h-2/3 sm:h-[30vh] lg:w-[65vw] lg:h-[40vh] sm:flex-2 lg:flex-none relative overflow-hidden" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <div className="hidden sm:block absolute bottom-0 left-0 w-full h-full z-0" style={{ background: index !== 1 ? "linear-gradient(to left, rgba(30, 30, 30, 0) 41.67%, #1E1E1E 95.22%)" : "linear-gradient(to right, rgba(30, 30, 30, 0) 41.67%, #1E1E1E 95.22%)" }} />
        <div className="sm:hidden absolute bottom-0 left-0 w-full h-full z-0" style={{ background: "linear-gradient(to bottom, rgba(30, 30, 30, 0) 41.67%, #1E1E1E 95.22%)" }} />
        <motion.img src={item.image} alt="Card Image" className="h-full w-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
        className={`absolute bottom-0 flex flex-col items-center sm:flex-row sm:items-start gap-2 sm:relative sm:flex-1 lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 ${index === 1 ? "sm:flex-row-reverse sm:right-20 lg:right-1/3 lg:translate-x-2/5" : "sm:flex-row z-30"}`}
      >
        <motion.div whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}><CardTitle className="text-4xl">{item.price}</CardTitle></motion.div>
        <div className={`flex flex-col items-center gap-2 sm:items-start ${index === 1 ? "lg:items-end" : "lg:items-start"}`}>
          <motion.div whileHover={{ x: index === 1 ? -10 : 10 }} transition={{ type: "spring", stiffness: 300 }}><CardTitle className="text-2xl lg:text-4xl text-nowrap">{item.name}</CardTitle></motion.div>
          <Paragraph className={`lg:w-2/5 text-center ${index === 1 ? "sm:text-right" : "sm:text-left"}`}>{item.description}</Paragraph>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DiningEvent;
