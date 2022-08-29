import React from 'react';
interface AlertErrorProps {
	errorMsg: string;
}

const AlertForm = ({ errorMsg }: AlertErrorProps) => {
	if (errorMsg === undefined) {
		return null;
	}
	return (
		<div
			className="alert bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full alert-dismissible fade show"
			role="alert"
		>
			<strong className="mr-1">Error</strong> {errorMsg}
			<button
				type="button"
				className="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
				data-bs-dismiss="alert"
				aria-label="Close"
			></button>
		</div>
	);
};

export default AlertForm;
