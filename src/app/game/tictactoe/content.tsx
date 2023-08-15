'use client'

export default function tictactoeContent() {
  return (
    <div className="h-full w-full">
      <div className="h-1/5 w-full bg-red-100 flex justify-evenly items-center">
        <input type="number" placeholder="Vertical"></input>
        <input type="number" placeholder="Horizontal"></input>
        <input type="number" placeholder="Win Condition"></input>
      </div>
      <div className="h-4/5 w-full bg-blue-100"></div>
    </div>
  );
}
