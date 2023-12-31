const ModalBase = ({ children, isOpen, onClose }) => {
	const handleClose = (e) => {
		if (e.target === e.currentTarget) onClose();
	};

	return (
		<div
			onClick={handleClose}
			className={`fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-10 ${
				isOpen ? '' : 'hidden'
			}`}
		>
			{children}
		</div>
	);
};

export default ModalBase;