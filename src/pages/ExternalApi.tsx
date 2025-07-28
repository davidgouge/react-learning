import { useEffect, useState } from "react";

type Player = {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string; // URL to the player's photo
};

type PlayerResponse = {
  paging: Paging;
  response: {
    player: Player;
  }[];
};

type Paging = {
  current: number;
  total: number;
};

async function GetPlayersData(page = 1): Promise<PlayerResponse> {
  const response = await fetch(
    `https://v3.football.api-sports.io/players?team=40&league=39&season=2023&page=${page}`,
    {
      method: "GET",
      headers: {
        "x-apisports-key": "37a25508555ff8f559cdb0059cfe84b8",
      },
    }
  );

  const data: PlayerResponse = await response.json();

  return data;
}

function ExternalApi() {
  const [players, setPlayers] = useState<Player[] | null>(null);
  const [paging, setPaging] = useState<Paging | null>(null);
  const [loading, setLoading] = useState(true);

  async function fetchData(page = 1) {
    try {
      const playerData = await GetPlayersData(page);
      setPlayers(playerData.response.map((item) => item.player));
      setPaging(playerData.paging);
    } finally {
      setLoading(false);
    }
  }

  const nextPage = () => {
    fetchData(paging?.current === undefined ? 1 : paging?.current + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Players</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <h2>
            Page {paging?.current} of {paging?.total} <a href='#' onClick={nextPage}>&gt;</a>
          </h2>
          <div>
            {players?.map((player) => (
              <>
                <p>
                  {player.firstname} {player.lastname}
                </p>
                <img src={player.photo} />
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default ExternalApi;
