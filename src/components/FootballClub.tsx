type FootballClubProps = {
  name: string;
  groundName: string;
  capacity: number;
  nickName: string;
  crest: string
};

export const FootballClub = ({club} : {club: FootballClubProps}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={club.crest}
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{club.name}</h5>
            <p className="card-text">
              Ground: {club.groundName} (Cap: {club.capacity.toLocaleString()})
            </p>
            <p className="card-text">Nickname: {club.nickName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
