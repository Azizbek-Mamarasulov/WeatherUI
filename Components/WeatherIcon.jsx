import React from 'react';

import SunIcon from '../assets/sun.svg';
import CloudyIcon from '../assets/cloudy.svg';
import MoonIcon from '../assets/moon.svg';
import RainIcon from '../assets/rain.svg';
// import MenuIcon from '../assets/menu.svg';
// import SearchIcon from '../assets/search.svg';

function WeatherIcon({ weatherType }) {
    if (weatherType === 'Sunny') {
        return <SunIcon width={34} height={34} fill="#fff" />
    }
    if (weatherType === 'Cloudy') {
        return <CloudyIcon width={34} height={34} fill="#fff" />
    }
    if (weatherType === 'Night') {
        return <MoonIcon width={34} height={34} fill="#fff" />
    }
    if (weatherType === 'Rainy') {
        return <RainIcon width={34} height={34} fill="#fff" />
    }
}

export default WeatherIcon;