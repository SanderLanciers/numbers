export function Cars(props) {
    const {cars} = props;
    return (<div>
        <div className={"section"}>
            <h3>Cars</h3>
            {cars.map((c) => <div key={c.title} className={"card"}><h3>{c.title}</h3>
                <div>merk: {c.merk}</div>
                <div>type: {c.type}</div>
                {c.kleur && <div>kleur: {c.kleur}</div>}</div>)}
        </div>
    </div>)
}
