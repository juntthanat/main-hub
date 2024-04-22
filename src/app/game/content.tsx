

export default function gameContent() {

    type typeGame = {
        id: number;
        title: string;
        url: string
      };

    const game: typeGame[] = [
        { id: 0, title: "Tic Tac Toe", url: "tictactoe" },
        { id: 1, title: "", url: "" },
        { id: 2, title: "", url: "" },
        { id: 3, title: "", url: "" },
        { id: 4, title: "", url: "" },
        { id: 5, title: "", url: "" },
        { id: 6, title: "", url: "" },
        { id: 7, title: "", url: "" },
        { id: 8, title: "", url: "" },
        { id: 9, title: "", url: "" },
        { id: 10, title: "", url: "" },
        { id: 11, title: "", url: "" },
        { id: 12, title: "", url: "" },
      ];

      const GameList = () => (
        <div className="h-full w-full flex flex-row flex-wrap">
          {game.map(game => 
            <div className="h-1/3 w-1/4 flex justify-center items-center flex-col" key={game.id}>
                <div className="h-5/6 w-5/6 bg-gray-900 text-white flex justify-center items-center rounded">
                    <a href={"game/" + game.url}>
                        {game.title} 
                    </a>
                </div> 
            </div>)}
        </div>
      );

    return (
        <div className="h-full w-full">
            {GameList()}
        </div>
    )
}