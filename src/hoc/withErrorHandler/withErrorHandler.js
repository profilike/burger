import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Wrap';
import useHttpErrorHandler from '../../hooks/httpErrorHandler';

const withErrorHandler = (WrapperComponent, axios) => {
	return props => {
		const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);
		return (
			<Aux>
				<Modal show={error} modalClosed={errorConfirmedHandler}>
					{error ? error.message : null}
				</Modal>
				<WrapperComponent {...props} />
			</Aux>
		);
	};
};

export default withErrorHandler;
