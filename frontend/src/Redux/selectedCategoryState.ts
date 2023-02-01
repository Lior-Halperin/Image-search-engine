import {IParamsModel} from '../Models/ParamsModel'
// 1. State - The global state relate to selectedCategory
export class selectedCategoryState {
    public selectedCategory: IParamsModel  // Initializes to an empty array at first avoid malfunctions 

}

// 2. Action Type - list of actions we can do on the above ImagesState:
export enum selectedCategoryActionType {
    FetchSelectedCategory = "FetchSelectedCategory", // Bring the selectedCategory
}

// 3. Action - interface for building a single action from above selectedCategoryActionType
export interface selectedCategoryAction {
    type: selectedCategoryActionType; // The type of the acton to perform.
    payload: any; // The data we need to do that action.
}

// 4. Action Creators - Functions for creating suitable Action objects: 
export function fetchSelectedCategoryAction(selectedCategory: IParamsModel): selectedCategoryAction {
    const action: selectedCategoryAction = { type: selectedCategoryActionType.FetchSelectedCategory, payload: selectedCategory }
    return action
}

// 5. Reducer - Do any of the above actions:
export function selectedCategoryReducer(currentState: selectedCategoryState = new selectedCategoryState(), action: selectedCategoryAction) {
    const newState = { ...currentState };

    switch (action.type) {

        case selectedCategoryActionType.FetchSelectedCategory:
            newState.selectedCategory = action.payload; // <-- here payload is all selectedCategory
            break;

    }

    return newState;
}