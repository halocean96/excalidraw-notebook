import { useState, useCallback, useRef, useEffect } from "react"
import { debounce } from 'radash'

const useExcalidraw = () => {
	// state
	const saveNotes = JSON.parse(localStorage.getItem('notes')) || []
	const [notes, setNotes] = useState(saveNotes)
	const [currentNoteIndex, setCurrentNoteIndex] = useState(0)
	const currrentNoteData = notes[currentNoteIndex]
	const excalidrawRef = useRef()

	// storage part
	useEffect(() => {
		localStorage.setItem('notes',JSON.stringify(notes))
	}, [notes])
	


	// CRUD

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const commitNoteData = useCallback(debounce({delay: 100}, (data) => {
		setNotes(prev => (
			prev.map(prevNote => {
				if(prevNote?.id === currrentNoteData?.id){
					return {
						...prevNote,
						content: data
					}
				}else {
					return prevNote
				}
        
			})
		))
	}), [currentNoteIndex])

	const focusNote = (index) => {
		setCurrentNoteIndex(index)
		if(excalidrawRef.current){
			const nextData = notes[index]?.content ?? []
			excalidrawRef.current.updateScene({
				elements: nextData
			})
		}
	}
	const addNote = () => {
		setNotes(prevNotes => {
			const newNote = {
				id: prevNotes.length + 1,
				title: '제목 없음',
				content: [],
			}
			return [...prevNotes, newNote]
		})
		focusNote(notes.length)
	}

	const editNote = (id) => {
		const newTitle = prompt('변경할 제목을 입력해주세요.')
		if(!newTitle) alert('제목을 입력해 주세요.')
		setNotes(prev => (
			prev.map(prevNote => {
				if(prevNote?.id === id){
					return {
						...prevNote,
						title: newTitle,
					}
				}else {
					return prevNote
				}
        
			})
		))
	}

	const removeNote = (id) => {
		setNotes(prev => (
			prev.filter(prevNote => {
				return prevNote?.id !== id
			})
		))
	}
	return {
		notes,
		excalidrawRef,
		commitNoteData,
		currentNoteIndex,
		focusNote,
		addNote,
		editNote,
		removeNote,
		currrentNoteData
	}
}

export default useExcalidraw