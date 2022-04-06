import {Piecharts, Pie, Legend, cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props

  return (
    <div className="vaccination-by-age-container">
      <h1 className="vaccination-by-age-heading">Vaccination By Age</h1>
      <Piecharts width={1000} height={300}>
        <Pie
          data={VaccinationByAgeDetails}
          cx="50%"
          cy="30%"
          outerRadius="60%"
          datakey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64C2A6" />
        </Pie>

        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </Piecharts>
    </div>
  )
}
