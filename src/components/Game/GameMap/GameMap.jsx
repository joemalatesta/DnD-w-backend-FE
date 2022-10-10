// import './GameMap.css'
// import TraveledMap from './TraveledMap/TraveledMap'


// const GameMap = (props) => {
  
//   let column = ["a","b","c","d","e","f","g","h","i","j",'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','bb','cc','dd','ee','ff','gg','hh','ii','jj','kk','ll','mm','nn','oo','pp','qq','rr','ss','tt','uu','vv','ww','xx','yy','zz','aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk','lll','mmm','nnn','ooo','ppp','qqq','rrr','sss','ttt','uuu','vvv','www','xxx','yyy','zzz','aaaa','bbbb','cccc','dddd','eeee','ffff','gggg','hhhh','iiii','jjjj','kkkk','llll','mmmmm','nnnn','oooo','pppp','qqqq','rrrr','ssss','tttt','uuuu','vvvv']

//   let boardArr = []
//   column.forEach(alpha => {
//    for(let i = 1; i<101; i++){
//     let tile = alpha + i
//     boardArr.push(tile)
//    }
//   }) 
 
//   let gamePlayArea = boardArr.map((loc) => <div className="square" key={loc} id={loc}></div>)
  

//   return (
//       <div>
//         <div hidden={props.viewMap ? true : false}>
          
//         <TraveledMap gamePlayArea={gamePlayArea}/>
//         </div>  
//       </div>
//     )
// }
 
// export default GameMap 