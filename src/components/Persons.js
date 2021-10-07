export function Persons(props) {
    const {persons} = props;
    return (<div>
        <div className={"section"}>
            <h3>Persons</h3>
            {persons.map((p) => <div key={p.ID} className={"card"}><h3>{p.Name}</h3>
                <div>{p.age}</div>
                <div>{p.city}</div></div>)}
        </div>
        <div className={"section"}>
            <h3>Persons sorted</h3>
            {persons.filter().map((p) => <div key={p.ID} className={"card"}><h3>{p.Name}</h3>
                <div>{p.age}</div>
                <div>{p.city}</div></div>)}
        </div>
    </div>)
}