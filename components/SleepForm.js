import React, { useState } from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import articleStyles from '../styles/Article.module.css'
import headerStyles from '../styles/Header.module.css'

const SleepForm = () => {
	const [tempMin, setTempMin] = useState('')
	const [bedtime, setBedtime] = useState('')
	const [wakingTime, setWakingTime] = useState('')
	const [departureTime, setDepartureTime] = useState('')
	const [departureDate, setDepartureDate] = useState('')
	const [arrivalTime, setArrivalTime] = useState('')
	const [arrivalDate, setArrivalDate] = useState('')
	console.log(bedtime)
	return (
		<>
			<div>
				<h1 className={headerStyles.subtitle}>Sleep Form</h1>

				<form className={articleStyles.grid} action='' method='get'>
					<div>
						<label htmlFor='departureTime'>Departure: </label>
						<input
							type='time'
							name='departureTime'
							id='departureInput'
							onChange={e => setDepartureTime(e.target.value)}
						/>
						<input
							type='date'
							name='departureDate'
							id='departureInput'
							onChange={e => setDepartureDate(e.target.value)}
						/>
					</div>

					<div>
						<label htmlFor='arrivalTime'>Arrival: </label>
						<input
							type='time'
							name='arrivalTime'
							id='arrivalInput'
							onChange={e => setArrivalTime(e.target.value)}
						/>
						<input
							type='date'
							name='arrivalDate'
							id='arrivalInput'
							onChange={e => setArrivalDate(e.target.value)}
						/>
					</div>

					<div>
						<label htmlFor='bedtime'>Bedtime: </label>
						<input
							type='time'
							name='bedtime'
							id='bedtimeInput'
							onChange={e => setBedtime(e.target.value)}
						/>
					</div>

					<div>
						<label htmlFor='wakeUp'>Waking Time: </label>
						<input
							type='time'
							name='wakeUp'
							id='wakeUpInput'
							onChange={e => setWakingTime(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</>
	)
}

export default SleepForm
