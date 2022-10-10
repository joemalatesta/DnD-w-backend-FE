import './GameMap.css'
import TraveledMap from './TraveledMap/TraveledMap'


const GameMap = (props) => {
  
  let column = ["a","b","c","d","e","f","g","h","i","j",'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','bb','cc','dd',
'ee','ff','gg','hh','ii','jj','kk','ll','mm','nn','oo','pp','qq','rr','ss','tt','uu','vv','ww','xx','yy','zz','aaa','bbb','ccc','ddd','eee','fff','ggg','hhh','iii','jjj','kkk','lll','mmm','nnn','ooo','ppp','qqq','rrr','sss','ttt','uuu','vvv','www','xxx','yyy','zzz','aaaa','bbbb','cccc','dddd','eeee','ffff','gggg','hhhh','iiii','jjjj','kkkk','llll','mmmmm','nnnn','oooo','pppp','qqqq','rrrr','ssss','tttt','uuuu','vvvv']
  let boardArr = []


  let board = column.forEach(alpha => {
    let row = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]
    row.forEach(num => {
      let tile = alpha + num
      boardArr.push(tile)
    })
  }) 
  console.log(column.length);
  let gamePlayArea = boardArr.map((loc) => <div className="square" key={loc} id={loc}></div>)
  

  return (
      <div>
        <div hidden={props.viewMap ? true : false} className="map">
          <TraveledMap gamePlayArea={gamePlayArea}/>
        </div>  
      </div>
    )
}
 
export default GameMap 