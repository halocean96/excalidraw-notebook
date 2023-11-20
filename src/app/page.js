'use client'

import LazyExcalidraw from "@/components/lazy_excalidraw"
import NoteItem from "@/components/note_iem"
import NoteLayout from "@/components/note_layout"
import useExcalidraw from "@/hooks/use_excalidraw"

export default function Home() {
	const {
		notes,
		excalidrawRef,
		commitNoteData,
		focusNote,
		addNote,
		editNote,
		removeNote,
		currentNoteIndex,
		currrentNoteData
	} = useExcalidraw()

	return (
		<main className='h-screen flex flex-row'>
			<NoteLayout>
				<button
					className="hover:bg-slate-200 rounded-md m-4 p-4"
					onClick={addNote}
				>새 노트 만들기</button>
				{
					notes.map((note, index) => (
						<NoteItem
							key={index}
							title={note.title}
							onSelect={() => focusNote(index)}
							onEdit={() => editNote(note.id)}
							onRemove={() => removeNote(note.id)}
							isFocused={index === currentNoteIndex}
						/>
					))
				}
			</NoteLayout>
			<section className='flex-grow flex item-center justify-center'>
				<LazyExcalidraw
        			ref={excalidrawRef}
        			onChange={commitNoteData}
					initialData={{
						elements: currrentNoteData?.content || []
					}}
					isShow={notes.length}
				/>
			</section>
		</main>
	)
}
