import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as charSheetService from '../../services/charSheetService'
import CharCard from '../../components/CharCard/Card'


const MyChars = (props) => {
  const [charSheets, setCharSheets] = useState([])

  const handleDeleteCharSheet = async id => {
    const deletedCharSheet = await charSheetService.deleteOne(id)
    setCharSheets(charSheets.filter(sheet => sheet._id !== deletedCharSheet._id))
  }

  useEffect(() =>{
    const fetchMyCharSheets = async (id) => {
      const charSheetsData = await charSheetService.GetMyChars(id)
      setCharSheets(charSheetsData)
    }
    fetchMyCharSheets()
  },[])
  
  return ( 
    <>
      <div className='app lowerGridCard'>
        <div>
          <h1 className='card title'>My Char Page</h1>
          <Link className='card' to='/createChar'>Create a New Character</Link>
        </div>
      </div>
      <div className='app noWrap'>
        {charSheets.length ?
          charSheets.map((charSheet,idx) =>
            <CharCard key={idx} handleDeleteCharSheet={handleDeleteCharSheet} charSheet={charSheet} />
          ) 
        :
          <div className='app card'>
            <h1>No Character Sheets</h1>
          </div>
        }
      </div>
    </>
   )
}
 
export default MyChars