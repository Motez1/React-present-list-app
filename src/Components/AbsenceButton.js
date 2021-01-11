import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



function AbsenceButton(props) {

    const {variant , disabled , text , onClick , showButton,className , size} = props

    return (
        showButton ? <Button size={size} className={className} variant={variant} disabled={disabled} onClick={onClick} > {text} </Button> :null
    )
}


export default AbsenceButton;