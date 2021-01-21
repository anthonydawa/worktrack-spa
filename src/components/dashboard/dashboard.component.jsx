import { useEffect,useContext } from "react";


const Dashboard = () => {
  const { value, setValue } = useContext(UserContext);

  useEffect(() => {
    console.log(value);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 w-screen h-screen p-12 bg-gray-200">
      <div className="bg-gray-800 ">1</div>
      <div className="bg-gray-800">2</div>
      <div className="bg-gray-800">3</div>
      <div className="bg-gray-800 col-span-2">4</div>
      <div className="bg-gray-800 row-span-2">5</div>
      <div className="bg-gray-800 col-span-2">6</div>
    </div>
  );
};
export default Dashboard;
