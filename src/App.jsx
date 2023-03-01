import React, { useState } from 'react';
import { getRandomNumber as random } from './utils/getRandomNumber';
import users from './assets/users.json';
import UserCard from './components/UserCard';

const App = () => {
  const [userIndex, setUserIndex] = useState(random(0, users.length - 1));
  const user = users[userIndex];
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const changeUser = () => {
    let newUserIndex = random(0, users.length - 1);

    while (newUserIndex == userIndex) {
      newUserIndex = random(0, users.length - 1);
    }

    setUserIndex(newUserIndex);
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-10 text-white text-center">
      <UserCard user={user} fullName={fullName} />
      <div>
        <button
          className="bg-amber-400 px-4 py-2 text-black mt-4 hover:bg-amber-500 rounded-lg"
          onClick={changeUser}
        >
          <i class="fa-solid fa-arrow-right-arrow-left text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default App;
