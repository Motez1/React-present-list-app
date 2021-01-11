import './App.css';
import React , {useState} from 'react'
import AbsenceButton from './Components/AbsenceButton';
import Data from './Components/Data'
import Member from './Components/Member'


function App() {
  const data = Data()
  const [start , setStart] = useState(false)
  const [persons , setPersons] = useState([])
  const [personFilter , setPersonFliter]  = useState(true)
  const [currentPerson , setCurrentPerson] = useState(0)

  function handleClick(value){
    setPersons([
      {
        id : currentPerson,
        name : data[currentPerson].name,
        presence : value
      },
      ...persons
    ])
    return  setCurrentPerson( currentPerson + 1 )
  }
  

  function handleFilter(per) {
    return (personFilter === true) || (personFilter === per.presence)
  }

  return (
    <div className="App"> 
      <div id="buttons">
        <AbsenceButton size='lg' className="Begin-button" showButton={data[currentPerson] && !start} variant="primary" text="Begin" onClick ={() => setStart(true)} />
          <div>
            <div>
              <AbsenceButton className="Presence-button" disabled={!start} showButton={data[currentPerson]} onClick={() =>data[currentPerson] ? handleClick("Present"):null} variant="outline-success" text="Present" />
              <AbsenceButton className="Presence-button" disabled={!start} showButton={data[currentPerson]} onClick={() =>data[currentPerson] ? handleClick("Excused"):null} variant="outline-warning" text="Excused" />
              <AbsenceButton className="Presence-button" disabled={!start} showButton={data[currentPerson]} onClick={() =>data[currentPerson] ? handleClick("Absent") :null} variant="outline-danger"   text="Absent" />
            </div>
            {/*<AbsenceButton className="Stop-button" showButton={data[currentPerson] && start} variant="primary" text="Stop" onClick ={() => setStart(false)} /> */}
          </div>
      </div>

      
      
      {start && data[currentPerson] ? <Member className="Member-name" showName={start && data[currentPerson]} name={data[currentPerson] ? data[currentPerson].name:null} />:null}

      <div>
        <AbsenceButton showButton={true} onClick={() => setPersonFliter("Present")}  variant="outline-success" text="Show Present" />
        <AbsenceButton showButton={true} onClick={() => setPersonFliter("Excused")}  variant="outline-warning" text="Show Excused" />
        <AbsenceButton showButton={true} onClick={() => setPersonFliter("Absent")}   variant="outline-danger"  text="Show Absent" />
        <AbsenceButton showButton={true} onClick={() => setPersonFliter(true)}       variant="outline-danger"  text="Show All" />
      </div> 

      {persons.filter((per)=>handleFilter(per)).map( (p) =>  <Member className="Member" key={p.id} showName={true} showButton={true} name={p.name} presence={p.presence} />  )} 
      
        
      
      
    </div> 
  )
}
  

export default App;



