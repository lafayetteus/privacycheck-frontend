import React from 'react';
import BlockContent from '@sanity/block-content-to-react';

const Hero = ({ title, subtitle, image }) => {
	return (
		<section className='hero df' style={{ backgroundImage: `url(${image.url})` }}>
			<div className='hero__content'>
				<h2 className='serif--lg serif--xl--md serif--xxl--lg'>{title}</h2>
				<div className='serif--md serif--lg--md pt2 pt4--md pt6--lg'>
					<BlockContent blocks={subtitle} />
				</div>
			</div>
		</section>
	);
};

export default Hero;
