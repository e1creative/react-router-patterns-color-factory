import { Link } from 'react-router-dom'

const Colors = ({colors}) => {
    return (
        <div className="Colors">
            <h1>Welcome to the Color Factory</h1>
            <Link to="/colors/new">Add a New Color</Link>
            <h2>Please select a color:</h2>
            <ul>
                { colors.map(color => {
                    let colorSrc = color[0] === "#" ?  "/colors/" + color.substr(1) : "/colors/" + color;
                    return  <li><Link to={colorSrc}>{color}</Link></li>
                    
                })}
            </ul>
        </div>
    )
}

export default Colors;