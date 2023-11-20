const NoteLayout = ({children}) => {
	return (
		<ul className="overflow-auto flex flex-col w-60 border-r-2">
			{children}
		</ul>
	)
}

export default NoteLayout