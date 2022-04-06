import {Barchart, Bar,XAxis,YAxis,Legend } from 'recharts'

import './index.css'

const VaccinationCovarage = props=>{
    const dataFormatter = (number)=>{
        if (number>1000){
            return `${(number/1000).tostring()}K`
        }
        return number.tostring()
    }
    const vaccinationCovarageDetails = props

    return(
        <div className="vaccination-by-coverage-container">
          <h1 className="vaccination-by-coverage-heading">VaccinationCovarage</h1>
          <Barchart
                width={900}
                height={400}
                data={vaccinationCovarageDetails}
                margin={{
                    top=5,
                }}
             >
            <XAxis
                datakey="vaccinatinData"
                tick={{
                    stroke: '#6c757d',
                    strokeWidth:1,
                    fontSize:15,
                    fontFamily:'Roboto',

                }}
            />
            <YAxis
                tickFormatter = {dataFormatter}
                tick={{
                    stoke:"#6c757d",
                    strokeWidth:0.5,
                    fontSize:15,
                    fontFamily:'Roboto',

                }}
            />
            <Legend
                wrapperStyle={{
                    padding:20,
                    textAlign:center,
                    fontSize:12,
                    fontFamily:'Roboto',
                }}
            />
            <Bar
                datakey = "dose1",
                name="Dose1",
                fill="#5a8dee"
                radius={[10, 10, 0, 0]}
                barSize="20%"

            />
            <Bar
                dataKey="dose2"
                name="Dose 2"
                fill="#f54394"
                radius={[5, 5, 0, 0]}
                barSize="20%"
        />
          </Barchart>
    </div>
    )
}
export default VaccinationCovarage