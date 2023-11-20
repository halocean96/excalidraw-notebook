import EditIcon from "@/icons/eidt"
import RemoveItem from "@/icons/remove"

const NoteItem = ({title, isFocused, onSelect, onEdit, onRemove}) => {
	return (
		<li
			className={`p-2 ${isFocused ? ' font-semi-bold' : 'font-light opacity-50'} relative text-purple-600`}
			onClick={onSelect}
		>
			<span>{title}</span>
			<div className="absolute right-4 top-1 flex gap-4 translate-y-1/2">
				<EditIcon className='w-4 h-4 cursor-pointer' onClick={onEdit}/>
				<RemoveItem className='w-4 h-4 cursor-pointer' onClick={onRemove}/>
			</div>
		</li>
	)
}

export default NoteItem