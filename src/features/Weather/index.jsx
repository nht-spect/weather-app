import React, { useEffect, useState } from 'react';
import SearchPlace from './components/SearchPlace/SearchPlace';
import useDefaultLocation from './hooks/useDefaultLocation';
import useGetCityDefault from './hooks/useGetCityDefault';
import useWeatherByWoeid from './hooks/useWeatherByWoeid';

WeatherFeature.propTypes = {};

function WeatherFeature(props) {
	const [woeid, setWoeid] = useState('');
	const { lattLong } = useDefaultLocation();
	const { cityDefault } = useGetCityDefault(lattLong);

	useEffect(() => {
		cityDefault.data?.map((data, idx) => idx === 0 && setWoeid(data.woeid));
	}, [cityDefault]);

	const { weatherData, loading } = useWeatherByWoeid(woeid);
	if (loading) {
		return <div>loading...</div>;
	}

	return (
		<div>
			weather
			<SearchPlace />
		</div>
	);
}

export default WeatherFeature;
