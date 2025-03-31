export default function Card(props){
    return(
        <div className='card'>
            <h1>{props.titulo || "hahahah"}</h1>
            <p>{props.paragrafo}</p>
            <button>botao</button>
        </div>

    )
}