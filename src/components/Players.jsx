import AvailablePlayers from './AvailablePlayers'
import SelectedPlayers from './SelectedPlayers'
import { useState } from 'react';


const Players = ({ players, selectPlayer, selectedPlayers, removePlayer }) => {
  console.log()
  const [isAvailablePlayer, setIsAvailablePlayer] = useState(true);
  return (
    <div>


      <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
        <h2 className='text-2xl font-bold'>{isAvailablePlayer ? "Available Players" : "Selected Players"}</h2>

        <div className='mt-2 md:mt-10 flex items-center px-5'>
          <button className={`border px-4 py-2 rounded-lg mr-6  ${isAvailablePlayer ? "bg-yellow-400" : "bg-gray-300"}`} onClick={() => setIsAvailablePlayer(true)}>Available Players</button>
          <button className={`border px-4 py-2 rounded-lg  ${!isAvailablePlayer ? "bg-yellow-400" : "bg-gray-300"}`} onClick={() => setIsAvailablePlayer(false)}>Selected Players({selectedPlayers.length})</button>
        </div>
      </div>

      {
        isAvailablePlayer ? <AvailablePlayers players={players} selectPlayer={selectPlayer} /> : 
        <SelectedPlayers selectedPlayers={selectedPlayers} removePlayer={removePlayer} setIsAvailablePlayer={setIsAvailablePlayer} 
       
        />
      }

    </div>


  )
}

export default Players