import React from 'react'

const Kurssi = ({ kurssi }) =>
    <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
    </div>

const Otsikko = (props) =>
    <div>
        <h1>{props.kurssi.nimi}</h1>
    </div>

const Sisalto = ({ kurssi }) => {
    const osaLista = kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)
    return (
        <div>
            {osaLista}
        </div>
    )
}

const Osa = ({ osa }) =>
    <div>
        <p>{osa.nimi} {osa.tehtavia}</p>
    </div>

const Yhteensa = ({ kurssi }) => {
    const summa = kurssi.osat.reduce((sum, osa) => sum + osa.tehtavia, 0)
    return (
        <div>
            <p>yhteensa {summa} tehtävää</p>
        </div>
    )
}

export { Kurssi, Otsikko, Sisalto, Osa, Yhteensa } 