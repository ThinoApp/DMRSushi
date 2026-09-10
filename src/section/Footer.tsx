import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Heading from "../components/Heading";
import LinkItem from "../components/LinkItem";
import { assetUrl } from "../config";

const socials = ["INSTAGRAM", "TWITTER", "FACEBOOK"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const Footer = () => {
  return (
    <div
      className="relative w-full h-screen px-5 py-2 bg-cover bg-center sm:px-10 sm:py-5 lg:px-20 lg:py-2 flex flex-col overflow-hidden"
      style={{ backgroundImage: `url("${assetUrl("assets/finedining3.png")}")` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-black"
        style={{
          background:
            "radial-gradient(74.22% 60.15% at 50% 39.85%, rgba(0, 0, 0, 0.6) 0%, rgba(30, 30, 30, 0.8) 47.76%, #1E1E1E 100%)",
        }}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="relative w-full flex-1 flex flex-col items-center gap-8 justify-center sm:gap-14"
      >
        <motion.div
          variants={itemVariants}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <Heading className="text-5xl text-center sm:text-7xl lg:text-5xl lg:w-2/3 lg:leading-[70px]">
            We ready to have you the best dining experiences
          </Heading>
        </motion.div>
        <motion.div variants={containerVariants} className="flex flex-col gap-4 items-center lg:items-center lg:flex-row lg:justify-center">
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <MapPin className="size-8 text-secondary" />
            </motion.div>
            <Paragraph className="text-center text-lg sm:w-2/3 sm:text-2xl sm:text-left lg:text-base lg:w-full">
              Jendral Sudirman Street Pahoman <br className="hidden lg:block" />
              Bandar Lampung, Lampung, 35222
            </Paragraph>
          </motion.div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-4">
            <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}>
              <Phone className="size-8 text-secondary" />
            </motion.div>
            <Paragraph className="text-center text-lg sm:text-2xl sm:text-left lg:text-base">
              Call us: +261 34 14 350 18
            </Paragraph>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }}>
          <Button btnType="primary" lined={false} className="sm:px-10 sm:py-5 mt-4 lg:px-5 lg:py-3" textClassName="text-2xl sm:text-4xl lg:text-xl">
            GO TO MENU
          </Button>
        </motion.div>
        <motion.div variants={containerVariants} className="flex flex-col items-center gap-4 sm:gap-10">
          <motion.img
            src={assetUrl("assets/logo.png")}
            alt="logo"
            className="size-15 sm:size-20"
            initial={{ opacity: 0, rotate: -180 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ rotate: 360, scale: 1.1 }}
          />
          <motion.div variants={containerVariants} className="flex gap-4 sm:gap-6">
            {socials.map((social) => (
              <motion.div key={social} variants={itemVariants} whileHover={{ y: -5, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                <LinkItem className="text-lg relative sm:text-2xl lg:text-base">
                  {social}
                  <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-secondary" initial={{ width: "50%" }} whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} />
                </LinkItem>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Footer;
