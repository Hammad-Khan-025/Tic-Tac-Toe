import React, { useState, useEffect } from "react";

const Player = ({ name, symbol,isActive, handleWinnerPlayerName}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

    // useEffect to update playerName state when name prop changes
    useEffect(() => {
      setPlayerName(name);
    }, [name]);

  const editPlayer = () => {
    setIsEditing(prevState=> !prevState);
    handleWinnerPlayerName(symbol, playerName)
  };

  return (
    <li className={`flex gap-8 sm:gap-5 rounded-md px-3 py-2 font-medium ${isActive? 'border-2 border-[#f1d246] animate-pulse' : ''}`}>
      <span className="flex gap-8 items-center text-[#f1d246] ">
        {isEditing ? (
          <input
            type="text"
            className="w-28 text-center outline-none p-1 bg-slate-800 capitalize "
            value={playerName}
            maxLength={15}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className=" p-1 capitalize">{playerName}</span>
        )}
        <span>{symbol}</span>
      </span>
      <button className="" onClick={editPlayer}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
