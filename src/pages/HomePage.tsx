import About from "../section/About";
import DiningEvent from "../section/DiningEvent";
import Footer from "../section/Footer";
import Hero from "../section/Hero";
import Menu from "../section/Menu";
import TodaySpecial from "../section/TodaySpecial";

const HomePage = () => {
  return (
    <div className="w-screen h-auto overflow-x-hidden! bg-[#1E1E1E]">
      <Hero />
      <TodaySpecial />
      <div className="relative w-full h-[40vh] sm:[30vh] lg:[20vh]">
        <img
          src="/assets/luxurybg(1) 1.png"
          alt="image divider"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(49.7% 57.5% at 49.94% 50%, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.5) 100%)",
          }}
        />
      </div>
      <Menu />
      <DiningEvent />
      <div className="relative w-full h-[40vh] sm:[30vh] lg:[20vh]">
        <img
          src="/assets/salmon 1.png"
          alt="image divider"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(49.7% 57.5% at 49.94% 50%, rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 0.5) 100%)",
          }}
        />
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
