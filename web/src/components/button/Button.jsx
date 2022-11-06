import './styles.css'
import { Link } from "react-router-dom";

export function Button(props) {


    return (
            <div className='container' to={props.to} style={{ backgroundColor: props.bg }} >

                <p className='txt' style={{ color: props.color }}>{props.title}</p>

            </div>
        
        )
}