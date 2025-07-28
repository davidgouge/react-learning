import type { Player } from "../types/Player";

type PlayersProps = {
  players: Player[];
};

function Players({ players }: PlayersProps) {
  return(
    <>
  {
    players.map((player) => (
      <>
        <p>
          {player.firstname} {player.lastname}
        </p>
        <img src={player.photo} />
      </>
    ))
  }
  </>
  );
}

export default Players;
