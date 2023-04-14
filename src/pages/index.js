import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

const link = 'https://zippy-unicorn-98aa38.netlify.app/api/test';

export default function Home() {
   const [users, setUsers] = useState([]);

   async function logJSONData() {
      const response = await fetch(link);
      const jsonData = await response.json();
      setUsers(jsonData);
      console.log(jsonData);
   }

   useEffect(() => {
      logJSONData();
   }, []);

   return (
      <div>
         {users.map((user, i) => {
            return (
               <div key={user.id}>
                  <div className="mt-10" key={user.id}>
                     <p>
                        {user.name} {user.job ? 'has job' : "don't have job"}
                     </p>
                  </div>
               </div>
            );
         })}
         <button onClick={() => console.log(users)}>Hello</button>
      </div>
   );
}
