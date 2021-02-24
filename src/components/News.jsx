import React from 'react';

const News = ({ title, list = [] }) => (
	<section className='news bg--white grid-container contained  pt5 pb5 pt7--sm pb7--sm pt10--lg pb10--lg reveal__slide reveal__delay--1'>
		<h2 className='serif--md serif--lg--md serif--xl--lg  col c6--sm'>{title}</h2>
	</section>
);

export default News;
