import { Link, useParams } from 'react-router-dom'

import './Color.css'

const Color = () => {
    const params = useParams();
    console.log(params)

    return (
        <div className="Color">
            <h1>{params.color}</h1>
            <div className="Color-box" style={{ backgroundColor: params.color }}></div>
            <Link to="/colors">Back to Colors</Link>
        </div>
    )
}

export default Color;