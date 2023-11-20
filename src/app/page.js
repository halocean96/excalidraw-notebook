'use client'
import { useState, useRef, useCallback, useEffect } from "react"
import { debounce } from 'radash'

// constant
import initialNotes from "@/constants/initialNotes"

export default function Home() {
  const [notes, setNotes] = useState(initialNotes)
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0)
  const currrentNoteData = notes[currentNoteIndex]
  const [Excalidraw, setExcalidraw] = useState(null)
  useEffect(() => {
    import('@excalidraw/excalidraw').then(module => {
      setExcalidraw(module.Excalidraw)
    })
  })
  const excalidrawRef = useRef()
  const commitNoteData = useCallback(debounce({delay: 100}, (data) => {
    setNotes(prev => (
      prev.map(prevNote => {
        if(prevNote.id === currrentNoteData.id){
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

  return (
    <main className='h-screen flex flex-col'>
      <ul className='flex flex-row gap-8 mb-10 flex-shrink-0'>
        {
          notes.map((note, index) => (
            <li key={note.id}>
              <button
                onClick={() => {
                  setCurrentNoteIndex(index)
                  if(excalidrawRef.current){
                    const nextData = notes[index].content
                    excalidrawRef.current.updateScene({
                      elements: nextData
                    })
                  }
                }}
                className={`${index !== currentNoteIndex ? 'text-stone-50' : 'text-yellow-300'} `}
              >
                {note.title}
              </button>
            </li>
          ))
        }
      </ul>
      <section className='flex-grow'>
        { 
        Excalidraw && 
        <Excalidraw
          ref={excalidrawRef}
          onChange={commitNoteData}
        />
      }
      </section>
    </main>
  )
}
