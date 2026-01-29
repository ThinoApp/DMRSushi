import { StarIcon } from "lucide-react";
import { motion } from "framer-motion";
import CardTitle from "../components/CardTitle";
import Paragraph from "../components/Paragraph";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";
import Button from "../components/Button";

const menu = [
  {
    name: "Tuna Sushi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.",
    image: "/assets/sushi3.png",
  },
  {
    name: "Salmon Sushi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.",
    image: "/assets/sushi6.png",
  },
  {
    name: "Just Sushi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus.",
    image: "/assets/sushi1.png",
  },
];

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

const TodaySpecial = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full  px-5 flex flex-col gap-5  items-center py-10
    lg:px-24
    "
    >
      <motion.div variants={itemVariants}>
        <Subtitle>Special menu</Subtitle>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Title className="text-4xl">Today's Special</Title>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Paragraph className="text-center text-xl sm:text-2xl sm:w-2/3 lg:w-full lg:text-lg">
          Special menu oftenly comes different everyday, this is our special
          food for today
        </Paragraph>
      </motion.div>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
        sm:gap-0 sm:mt-12
      "
      >
        {menu.map((item, index) => (
          <SpecialCard key={item.name} item={item} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

const SpecialCard = ({
  item,
  index,
}: {
  item: (typeof menu)[0];
  index: number;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`flex flex-col gap-2  bg-[#2E2E2E] ${index === 2 ? "sm:col-span-2 sm:h-fit" : ""} lg:col-span-1 overflow-hidden`}
      style={{
        boxShadow: "0px 4px 30px rgba(245, 190, 50, 0.1)",
      }}
    >
      <motion.div className="overflow-hidden min-h-[30vh] max-h-[30vh]">
        <motion.img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
      <div className="w-full h-full flex flex-col gap-4 px-2 py-2 sm:px-5 sm:py-5">
        <CardTitle className="text-[25px]">{item.name}</CardTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
          imperdiet lectus.
        </Paragraph>
        <motion.div
          className="flex flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              whileHover={{ scale: 1.3, rotate: 15 }}
            >
              <StarIcon strokeWidth={0} fill="#F5BE32" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button btnType="outline" lined className="sm:self-start">
            Order Now
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TodaySpecial;
