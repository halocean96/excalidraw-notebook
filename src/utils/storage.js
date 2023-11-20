export const getItem = (key) => {
	if(typeof window === 'undefined') return null
	try{
		return JSON.parse(localStorage.getItem(key))
	}catch(e){
		return null
	}
}

export const setItem = (key, value) => {
	if(typeof window === 'undefined') return null
	try{
		return localStorage.setItem(key, JSON.stringify(value))
	}catch(e){
		return null
	}
}