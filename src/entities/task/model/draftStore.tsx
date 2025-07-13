import { createContext, useContext, useState, type ReactNode } from "react";
import type { DraftContextType, DraftTask } from "./types"
import { INITIAL_DRAFT_TASK } from "./const";


const DraftContext = createContext<DraftContextType | undefined>(undefined)


export function useDraftStore() {
    const draftContext = useContext(DraftContext)

    if (!draftContext) {
        throw new Error("useDraftStore is undefined. useDraftStore must be used inside <DraftProvider>")
    }

    return draftContext
}


export function DraftProvider({children}: {children: ReactNode}) {
    const [draft, setDraft] = useState(INITIAL_DRAFT_TASK)

    const updateDraft = (draft: DraftTask) => {setDraft(draft)}

    return (
        <DraftContext.Provider value={{draft, updateDraft}}>
            {children}
        </DraftContext.Provider>
    )
}