import FootballClub from "../components/FootballClub";

export const Components = () => {
  const clubs = [
    {
      name: "Liverpool",
      groundName: "Anfield",
      nickName: "The Reds",
      capacity: 61276,
      crest:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/200px-Liverpool_FC.svg.png",
    },
    {
      name: "Everton",
      groundName: "Hill Dickinson Stadium",
      nickName: "The Blues",
      capacity: 52769,
      crest:
        "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/Everton_FC_logo.svg/250px-Everton_FC_logo.svg.png",
    },
    {
      name: "Wolverhampton Wanderers",
      groundName: "Molineux",
      nickName: "Wolves",
      capacity: 31750,
      crest:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/250px-Wolverhampton_Wanderers_FC_crest.svg.png",
    },
  ];

  return (
    <>
      <h1>Components</h1>
      <div className="row g-3">
        <div className="col-md-3">
          {clubs.map((club) => (
            <FootballClub {...club} />
          ))}
        </div>
        <div className="col-md-9">
          <div style={{backgroundColor:"red"}}>
            <p>Hello</p>
          </div>
        </div>
      </div>
    </>
  );
};
