import React, { useState } from 'react';
import Close from './Close';

const ContactModal = ({ setIsModalOpen, style }) => {
	const [state, setState] = useState({
		firstName: null,
		lastName: null,
		email: null,
		phone: null,
		message: null,
		isSuccess: false,
		isError: false,
	});

	const handleSubmit = async event => {
		event.preventDefault();

		// if (!state.firstName || !state.lastName || !state.email || !state.phone) {
		// 	setState({
		// 		...state,
		// 		isError: true,
		// 	});
		// 	return;
		// }

		const response = await fetch('./api/mailchimp');
		console.log(response);
	};

	return (
		<div style={{ ...style }} className='pf fill top left right bottom contact-modal bg--grey'>
			<button onClick={() => setIsModalOpen(false)} className='pa contact-modal__close'>
				<Close />
			</button>
			<form
				name='contact'
				className='contact-modal__form contact-form col c12 c10--md c6--lg mxa mt5 mt7--md mt10--lg'>
				<p className='serif--lg serif--xl--md'>Contact Us.</p>
				<p className='serif--md serif--lg--lg pt1'>Protect your digital Life</p>

				<label>
					<input
						type='text'
						name='firstName'
						placeholder='First Name*'
						className='contact-form__input mt5 mt10--lg db x'
						required
						onChange={event => {
							event.preventDefault();
							const { target } = event;
							setState({
								...state,
								firstName: target.value,
							});
						}}
					/>
				</label>
				<label>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name*'
						className='contact-form__input mt2 db x'
						required
						onChange={event => {
							event.preventDefault();
							const { target } = event;
							setState({
								...state,
								lastName: target.value,
							});
						}}
					/>
				</label>
				<label>
					<input
						type='email'
						name='email'
						placeholder='Email*'
						className='contact-form__input mt2 db x'
						required
						onChange={event => {
							event.preventDefault();
							const { target } = event;
							setState({
								...state,
								email: target.value,
							});
						}}
					/>
				</label>
				<label>
					<input
						type='tel'
						name='phone'
						placeholder='Phone*'
						className='contact-form__input mt2 db x'
						required
						onChange={event => {
							event.preventDefault();
							const { target } = event;
							setState({
								...state,
								phone: target.value,
							});
						}}
					/>
				</label>
				<label>
					<textarea
						name='message'
						placeholder='Message*'
						className='contact-form__input contact-form__input---textarea mt2 db x'
						required
						onChange={event => {
							event.preventDefault();
							const { target } = event;
							setState({
								...state,
								message: target.value,
							});
						}}
					/>
				</label>
				<button className='mxa button--primary mt2 mt5--md ' onClick={handleSubmit}>
					Submit
				</button>

				{state.isError && (
					<p className='serif--md error mt1'>
						Uh oh. Something went wrong. Please double-check the form & try again.
					</p>
				)}
			</form>
		</div>
	);
};
export default ContactModal;
