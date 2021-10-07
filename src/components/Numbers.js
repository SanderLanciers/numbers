
export function Numbers(props) {
    const {numbers} = props;
    return (<div>
        <div className={"section"}>
            <h3>Numbers</h3>
            {numbers.map((n,index) => <div key={index}  className={"card"}>{n}</div> )}
        </div>
            <div className={"section"}>
            <h3>Numbers>6</h3>
            {numbers.filter(n => n>6).map((n,index) => <div key={index}  className={"card"}>{n}</div> )}
            </div>
                <div className={"section"}>
            <h3>Numbers Doubled</h3>
            {numbers.map((n,index) => <div key={index}  className={"card"}>{n*2}</div> )}
                </div>
        </div>
    )
}

