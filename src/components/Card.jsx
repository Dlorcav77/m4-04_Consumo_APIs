
const Card = ({nakama}) => {
    const {id,name,image,status,species,type} = nakama;
    return (
        <div className="card bg-dark text-white mb-3" id="card">
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="m-0">{status}</p>
                <p className="m-0">{species}</p>
                <p className="m-0">{type}</p>
                <hr />
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
         </div>
    )
}

export default Card;
