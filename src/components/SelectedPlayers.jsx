import { RiDeleteBin3Fill } from "react-icons/ri";

const SelectedPlayers = ({ selectedPlayers, removePlayer,setIsAvailablePlayer }) => {
  return (
    <div className="py-8 bg-gray-100 mt-16 mb-20">
      <h2 className="text-center text-2xl font-bold mb-6">Selected Players ({selectedPlayers.length}/6)</h2>
      <div className="space-y-4 px-8">
        {selectedPlayers.map((player) => (
          <div key={player.playerId} className="bg-white p-4 shadow-lg rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-4">
            <img src={player.imageURL} alt={player.name} className="h-16 w-16 object-cover rounded-full" />
            <div>
              <h3 className="text-lg font-bold">{player.name}</h3>
              <p className="text-sm text-gray-700">Role: {player.role}</p>
              <p className="text-sm text-gray-700">Price: {player.biddingPrice}</p>
            </div>
            </div>
            <button
              onClick={() => removePlayer(player.playerId, player.biddingPrice)}
              className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-500"
            >
             <RiDeleteBin3Fill/>
            </button>
          </div>
        ))}
      </div>
    <button className={` m-10 border px-4 py-2 rounded-lg bg-yellow-400`} onClick={() => setIsAvailablePlayer(true)}>Add more player</button>

    </div>
  );
};

export default SelectedPlayers;
