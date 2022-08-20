import {useState} from "react"

export default function Form ({findPatron}){
    const [state, setState] = useState({
        search: ''
    });

    const changeEvent = (e) => {
        setState({search: e.target.value});
    }

    const submitEvent = (e) => {
        e.preventDefault();
        findPatron(state.search)
    }

    return(
        <>
        <form onSubmit={submitEvent}>
            <input type="text" value={state.search} onChange={changeEvent} />
            <input type="submit" value="Search" />
        </form>
        </>
    )
}