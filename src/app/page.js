'use client'

import LazyExcalidraw from "@/components/lazy_excalidraw"
import NoteItem from "@/components/note_item"
import NoteLayout from "@/components/note_layout"
import useExcalidraw from "@/hooks/use_excalidraw"
import RemoveModal from "@/components/modal/remove-modal"
import { removeModalAtom } from "@/states/removeModal"
import { useSetRecoilState, RecoilRoot } from "recoil"

function Home() {
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
	
	const setIsOpenRemoveModal = useSetRecoilState(removeModalAtom)
	const openRemoveModal = (id) => {
		setIsOpenRemoveModal({
			isOpen: true,
			onRemove: () => removeNote(id),
		})
	}
	return (
		<main className='h-screen flex flex-row'>
			<NoteLayout>
				<button
					className="rounded-md m-4 p-4 shadow-md hover:bg-slate-50 text-purple-500"
					onClick={addNote}
				>새 노트</button>
				{
					notes.map((note, index) => (
						<NoteItem
							key={index}
							title={note.title}
							onSelect={() => focusNote(index)}
							onEdit={() => editNote(note.id)}
							onRemove={() => openRemoveModal(note.id)}
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
			<RemoveModal />
		</main>
	)
}

const HomeWithRecoil = () => <RecoilRoot><Home/></RecoilRoot>;

export default HomeWithRecoil;
