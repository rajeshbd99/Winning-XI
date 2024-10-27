import React from 'react';

const PlayerCard = ({ player, selectPlayer }) => {
  return (
    <div className="bg-white p-4 shadow-lg border rounded-lg overflow-hidden">
      <img src={player.imageURL} alt={player.name} className="w-full h-64 object-cover " />
      <div className="p-6">
        <h3 className="text-lg font-bold text-red-600">{player.name}</h3>
        <p className="text-sm text-gray-700">Country: {player.country}</p>
        <p className="text-sm text-gray-700">Role: {player.role}</p>
        <p className="text-sm text-gray-700">Batting Style: {player.battingStyle}</p>
        <p className="text-sm font-semibold text-sky-600">Bidding Price: {player.biddingPrice}</p>
        <button
          onClick={() => selectPlayer(player)}
          className="mt-4 bg-yellow-400 text-black px-3 py-2 rounded-lg hover:bg-yellow-500 w-full"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
