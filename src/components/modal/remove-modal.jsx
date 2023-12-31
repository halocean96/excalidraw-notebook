import React from 'react';
import ModalBase from './modal-base';
import { removeModalAtom } from '@/states/removeModal';
import { useRecoilState } from 'recoil';
const RemoveModal = () => {
	const [removeModal, setRemoveModal] = useRecoilState(removeModalAtom);
	const closeModal = () => setRemoveModal({ ...removeModal, isOpen: false });
	const isOpen = removeModal.isOpen;
	const handleRemove = () => {
		removeModal.onRemove();
		closeModal()
	};

	return (
		<ModalBase isOpen={isOpen} onClose={closeModal}>
			<section className='flex flex-row space'>
				<div className='flex flex-col justify-center items-center w-64 h-32 bg-white rounded-lg'>
					<p className='text-xl font-bold'>정말 제거하시겠습니까?</p>
					<div className='flex flex-row space-x-4 mt-4'>
						<button onClick={handleRemove} className=' px-6 py-2 border border-red-500 hover:bg-red-100 text-red-500 rounded-lg'>Yes</button>
						<button onClick={closeModal} className=' px-6 py-2 border border-gray-800 hover:bg-gray-100 text-gray-800 rounded-lg'>No</button>
					</div>
				</div>
			</section>
		</ModalBase>
	);
};

export default RemoveModal;

