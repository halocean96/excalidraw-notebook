import { atom } from "recoil"

const defaultFn = () => {}

export const removeModalAtom = atom({  
	key: 'removeModalAtom',
	default: {
		isOpen: false,
		onRemove: defaultFn,
	}
})