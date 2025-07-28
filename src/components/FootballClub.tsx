type FootballClubProps = {
  name: string;
  groundName: string;
  capacity: number;
  nickName: string;
  crest: string;
};

function FootballClub({ crest, name, groundName, capacity, nickName }: FootballClubProps ) {
  return (
    <div className="card mb-3" >
      <div className="row g-0">
        <div className="col-md-2">
          <img
            src={crest}
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Ground: {groundName} (Cap: {capacity.toLocaleString()})
            </p>
            <p className="card-text">Nickname: {nickName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default FootballClub;