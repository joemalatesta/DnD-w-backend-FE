const HitPoints = (props) => {
  
  return (
    <div className={props.viewHp ? '' : "app card"} hidden={props.viewHp ? true : false}>
      <h1 hidden={props.viewHp ? true : false } >
        HP: {props.state.state.hitPoints}
      </h1>
    </div>
    )
}
 
export default HitPoints