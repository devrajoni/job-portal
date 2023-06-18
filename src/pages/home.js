import Banner from "../section/home/banner";
import Category from "../section/home/category";
import Choose from "../section/home/choose";
import Company from "../section/home/company";
import Feature from "../section/home/feature";
import Register from "../section/home/register";
import Testimonial from "../section/home/testimonial";
import Vacancies from "../section/home/vacancies";
import Work from "../section/home/work";

function Home() {
  return (
    <>
      <Banner />
      <Choose />
      <Vacancies />
      <Category />
      <Work />
      <Feature />
      <Company />
      <Testimonial />
      <Register />
    </>
  );
}

export default Home;
