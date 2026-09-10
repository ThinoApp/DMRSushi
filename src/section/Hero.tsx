import { motion } from "framer-motion";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Header from "./Header";
import { assetUrl } from "../config";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen px-5 py-2 bg-cover bg-center sm:px-10 sm:py-5 lg:px-20 lg:py-2 flex flex-col"
      style={{ backgroundImage: `url("${assetUrl("assets/hero.png")}")` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
        style={{
          background:
            "radial-gradient(74.22% 60.15% at 50% 39.85%, rgba(0, 0, 0, 0.6) 0%, rgba(30, 30, 30, 0.8) 47.76%, #1E1E1E 100%)",
        }}
      ></motion.div>
      <Header />
      <div className="relative w-full flex-1 flex flex-col items-center gap-8 justify-center sm:gap-12 lg:-top-10 ">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Subtitle className="text-4xl text-white sm:text-5xl lg:text-3xl">
            Best sushi in town
          </Subtitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full flex justify-center"
        >
          <Heading className="text-5xl text-center sm:text-7xl lg:text-6xl lg:w-2/3 lg:leading-[70px]">
            Taste the rich flavor of high quality sushi{" "}
          </Heading>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <Paragraph className="text-center text-xl sm:text-2xl lg:w-full lg:text-lg">
            We only use the five star quality for our menu, come and get the
            richness in every food we serve.
          </Paragraph>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            btnType="primary"
            lined={true}
            className="sm:px-10 sm:py-5 mt-4 lg:px-5 lg:py-3"
            textClassName="text-2xl lg:text-xl "
          >
            GO TO MENU
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
