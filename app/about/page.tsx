import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute:"about"
  },


};
const About = () => {
  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("data fetched successfully");
      }, 2000);
    });
  const data = fetchData();
  return (
    <div className="  flex justify-center items-center min-h-screen">
      {data}
    </div>
  );
};
export default About;
