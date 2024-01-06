import { create } from 'zustand';
import { ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/types/types';
interface NoteState {
	notes: string[];
	addNote: () => void;
	excalidrawApi: ExcalidrawImperativeAPI | undefined;
}

export const useNoteStore = create((set) => ({
	notes: [],
	excalidrawApi: undefined,
	addNote: () =>
		set((state: NoteState) => ({ notes: [...state.notes, 'New Note'] })),
	setExcalidrawApi: (api: ExcalidrawImperativeAPI) =>
		set((state: NoteState) => ({ ...state, excalidrawApi: api }))
}));
