import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {VaccinationByGenderDetails} = props

  return (
    <div className="vaccination-by-gender-container">
      <h1 className="vaccination-by-gender-heading">Vaccination By Gender</h1>
      <Piechart width={900} height={1000}>
        <Pie
          data={VaccinationByGenderDetails}
          cx="50%"
          cy="30%"
          startAngle={180}
          endAngele={0}
          outerRaduius="60%"
          innerRadius="30%"
          datakey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          veticalAlign="bottom"
          align="center"
          wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
        />
      </Piechart>
    </div>
  )
}

export default VaccinationByGender
