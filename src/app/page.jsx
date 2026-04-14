'use client'
import ProfileCard from "@/components/ProfileCard";
import { useData } from "@/context/dataContext";
import { FaPlus } from "react-icons/fa6";

export default function Home() {
  const h1Style = 'text-3xl text-custom font-semibold';
  const pStyle = 'text-gray-600';
  const cardStyle = 'bg-white rounded-lg space-y-2 shadow-sm p-6 text-center';

  const data = useData()
  const users = data.data
  console.log(data);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center mt-12">
          <div className="intro text-center space-y-5">
            <h1 className="text-4xl font-bold">Friends to keep close in your life</h1>
            <p className="text-gray-500">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
              relationships that matter most.
            </p>

            <button className="btn bg-custom text-white font-light"><FaPlus /> Add a Friend</button>
          </div>

          <div className="cards grid grid-cols-1 max-sm:w-full sm:grid-cols-2 md:grid-cols-4 gap-6 py-12 border-b border-gray-200 w-full">
            <div className={cardStyle}>
              <h1 className={h1Style}>10</h1>
              <p className={pStyle}>Total Friends</p>
            </div>
            <div className={cardStyle}>
              <h1 className={h1Style}>3</h1>
              <p className={pStyle}>On Track</p>
            </div>
            <div className={cardStyle}>
              <h1 className={h1Style}>6</h1>
              <p className={pStyle}>Need Attention</p>
            </div>
            <div className={cardStyle}>
              <h1 className={h1Style}>12</h1>
              <p className={pStyle}>Interactions This Month</p>
            </div>
          </div>
        </div>

        <div className="friends py-12 space-y-3">
          <h2 className="text-2xl font-semibold mb-4">Your Friends</h2>
          <div className="friend-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {
                users.map(user => <ProfileCard key={user.id} user={user}></ProfileCard>)
              }
          </div>
        </div>
      </div>
    </>
  );
}
