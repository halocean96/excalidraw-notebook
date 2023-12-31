import { useState, forwardRef, useEffect } from 'react'

const LazyExcalidraw = forwardRef(({fallback, isShow,...props}, ref) => {
	const [Excalidraw, setExcalidraw] = useState(null)

	useEffect(() => {
		if(isShow){
			import('@excalidraw/excalidraw').then(module => {
				setExcalidraw(module.Excalidraw)
			})
		}
	}, [isShow])
	if(!isShow) {
		return (
			<div className='flex items-center justify-center text-gray-500'>
				<p>노트를 선택해주세요.</p>
			</div>
		)
	}
	return (
		<>
			{
				Excalidraw ? 
					<Excalidraw {...props} ref={ref}/>
					:   fallback
			}
		</>
	)
})

LazyExcalidraw.displayName = 'lazy-excalidraw'

export default LazyExcalidraw