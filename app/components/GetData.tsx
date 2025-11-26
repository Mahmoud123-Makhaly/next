const GetData = () => {
  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("data fetched successfully");
      }, 2000);
    });
  const data = fetchData();
  return <div> {data}</div>;
};
export default GetData;
