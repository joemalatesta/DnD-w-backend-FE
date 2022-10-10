const CharStats = (props) => {
  let sts = props.state.state

  return (
      <div hidden={props.viewCharStats ? true : false}>
        <div id='char-stats-game' className="app largeCard" >
          <h1>{sts.name}</h1>
          <h2>Level: {sts.level}</h2>
          <h3>Class: {sts.class}</h3>
          <h3>Race: {sts.race}</h3>
          <h3>STR: {sts.str}</h3>
          <h3>DEX: {sts.dex}</h3>
          <h3>CON: {sts.con}</h3>
          <h3>INT: {sts.int}</h3>
          <h3>WIS: {sts.wis}</h3>
          <h3>CHR: {sts.cha}</h3>
          <h3>Experience: {sts.experience}</h3>
          <h3>Owner: {sts.owner.name}</h3> 
        </div>
      </div>
    )
}
 
export default CharStats