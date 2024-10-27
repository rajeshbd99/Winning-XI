import React from 'react';
import PlayerCard from './PlayerCard';

const AvailablePlayers = ({ players, selectPlayer }) => {
  return (
    <div className="py-8 mt-16 mb-16">
      <h2 className="text-center text-2xl font-bold mb-6">Available Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {players.map((player) => (
          <PlayerCard key={player.playerId} player={player} selectPlayer={selectPlayer} />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
