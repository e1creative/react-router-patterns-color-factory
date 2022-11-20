import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const NewColorForm = ({handleSetColors}) => {
    const INITIAL_STATE = {};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value}) )
    }

    const handleSubmit = e => {
        e.preventDefault();
        handleSetColors(formData);
        navigate("/colors");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color:</label>
            <input type="color" id="color" name="color" value={formData.color} onChange={handleChange} />
            <button>Add Color</button>
        </form>
    )
}

export default NewColorForm;