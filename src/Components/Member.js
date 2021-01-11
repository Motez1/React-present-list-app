import AbsenceButton from './AbsenceButton';

function Member(props){
    const {name , presence , showButton , showName ,className} = props
    return ( 
        <div >
            <div className={className}>{showName ? name:null}</div>
            <AbsenceButton  showButton={showButton} text={presence} />
        </div>
        
    )
}

export default Member;