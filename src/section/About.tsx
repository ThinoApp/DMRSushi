import { motion } from "framer-motion";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import { assetUrl } from "../config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full  px-5 flex flex-col gap-5  items-center py-10
    lg:px-24 lg:py-20"
    >
      <motion.div variants={itemVariants}>
        <Subtitle>About us</Subtitle>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Title className="text-4xl">Our Story</Title>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Paragraph className="text-center text-xl sm:text-2xl sm:w-2/3 lg:w-full lg:text-lg">
          A journey for making successful luxury restaurant with the best
          services
        </Paragraph>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-4
      lg:flex-row sm:mt-10 
      "
      >
        <motion.div
          className="grid grid-cols-2 grid-rows-2 w-full h-[70vh] sm:h-[50vh]
        lg:w-[50vw]! lg:h-full
          "
        >
          <motion.div
            variants={imageVariants}
            className="col-span-2 sm:col-span-1 sm:row-span-2 overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={assetUrl("assets/chef4 1.png")}
              alt="About Us"
              className="h-full object-cover w-full"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={assetUrl("assets/chef1.png")}
              alt="About Us"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          <motion.div
            variants={imageVariants}
            className="overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={assetUrl("assets/chef2.png")}
              alt="About Us"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          variants={containerVariants}
          className="flex flex-col gap-4 flex-1 items-start
    lg:justify-center lg:p-10 lg:gap-10
        "
        >
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Paragraph
              className="text-lg sm:text-2xl sm:leading-10
          lg:text-base lg:leading-normal
          lg:w-3/4 
          "
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat urna id leo euismod rhoncus. Aliquam erat volutpat. Nulla
              id aliquam neque, at dignissim quam. Praesent et lacus accumsan,
              consequat nisl a, mattis sapien.
            </Paragraph>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Paragraph
              className="text-lg sm:text-2xl sm:leading-10
          lg:text-base lg:leading-normal
          lg:w-3/4
          "
            >
              Nam sodales ullamcorper aliquet. Phasellus ut pretium libero,
              vitae imperdiet purus. Sed sed tincidunt velit. Aliquam vitae
              ipsum molestie, vehicula nisi quis, finibus leo.
            </Paragraph>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              btnType="outline"
              lined={true}
              textClassName="text-2xl sm:text-4xl self-start lg:text-lg"
            >
              More about us
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
