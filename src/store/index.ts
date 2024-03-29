import { create } from 'zustand';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
import { ImportedDataState } from '@excalidraw/excalidraw/types/data/types';
import { nanoid } from 'nanoid';
import { persist } from 'zustand/middleware';
import { last } from 'radash';
export interface Note {
	id: string;
	title: string;
	data: ImportedDataState['elements'];
}

interface NoteState {
	noteList: Note[];
	addNote: (title: string) => void;
	currentId?: Note['id'];
	excalidrawApi?: ExcalidrawImperativeAPI;
	setExcalidrawApi: (api: ExcalidrawImperativeAPI) => void;
	selectNote: (id?: Note['id']) => void;
	removeNote: (id: Note['id']) => void;
	editNoteTitle: (id: Note['id'], title: string) => void;
	onNoteChange: (note: Note['data']) => void;
}

export const useNoteStore = create<NoteState>()(
	persist(
		(set, get) => ({
			noteList: [],
			excalidrawApi: undefined,
			currentId: undefined,
			addNote: (title: string) => {
				const newId = nanoid();
				set((state) => {
					return {
						noteList: [
							...state.noteList,
							{ id: newId, title, data: [] }
						]
					};
				});
				get().selectNote(newId);
			},
			onNoteChange: (note) =>
				set((state) => {
					const { noteList, currentId } = state;
					if (!note) return { noteList };
					return {
						noteList: noteList.map((item) =>
							item.id === currentId
								? { ...item, data: note }
								: item
						)
					};
				}),
			selectNote: (id) => {
				const { noteList: notes, excalidrawApi } = get();
				const targetNote = notes.find((note) => note.id === id);
				set((state) => ({ ...state, currentId: id }));
				if (targetNote && excalidrawApi) {
					excalidrawApi.updateScene({ elements: targetNote.data });
				}
			},
			removeNote: (id) => {
				set((state) => ({
					noteList: state.noteList.filter((note) => note.id !== id)
				}));
				const { noteList, selectNote } = get();
				const nextNoteId = last(noteList)?.id;
				selectNote(nextNoteId);
			},
			editNoteTitle: (id, title) => {
				set((state) => ({
					noteList: state.noteList.map((note) =>
						note.id === id ? { ...note, title } : note
					)
				}));
			},
			setExcalidrawApi: (api) => {
				set((state) => ({ ...state, excalidrawApi: api }));
			}
		}),
		{
			name: 'note-storage'
		}
	)
);
