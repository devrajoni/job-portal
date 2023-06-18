import Subscribe from "../components/Subscribe";
import Brand from "../section/about/brand";
import Image from "../section/about/image";
import Mission from "../section/about/mission";
import Who from "../section/about/who";
import Choose from "../section/home/choose";
import Register from "../section/home/register";

function About() {
  return (
    <>
      <Who />
      <Brand />
      <Image />
      <Choose />
      <Mission />
      <Register />
      <Subscribe />
    </>
  );
}

export default About;
