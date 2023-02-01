
// 1. State - The global state relate to imagesCollection
export class imagesCollectionState {
    public imagesCollection: any = {}; // Initializes to an empty array at first avoid malfunctions 

}

// // 2. Action Type - list of actions we can do on the above ImagesState:
export enum imagesCollectionActionType {
    FetchImagesCollection = "FetchImagesCollection", // Bring the imagesCollection
}

// 3. Action - interface for building a single action from above imagesCollectionActionType
export interface imagesCollectionAction {
    type: imagesCollectionActionType; // The type of the acton to perform.
    payload: any; // The data we need to do that action.
}

// 4. Action Creators - Functions for creating suitable Action objects: 
export function fetchImagesCollectionAction(imagesCollection: any): imagesCollectionAction {
    const action: imagesCollectionAction = { type: imagesCollectionActionType.FetchImagesCollection, payload: imagesCollection }
    return action
}

// 5. Reducer - Do any of the above actions:
export function imagesCollectionReducer(currentState: imagesCollectionState = new imagesCollectionState(), action: imagesCollectionAction) {
    const newState = { ...currentState };

    switch (action.type) {

        case imagesCollectionActionType.FetchImagesCollection:
            newState.imagesCollection = action.payload; // <-- here payload is all imagesCollection
            break;

    }

    return newState;
}