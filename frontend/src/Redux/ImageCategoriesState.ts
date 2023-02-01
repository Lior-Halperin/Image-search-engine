import { IImageCategoriesModel } from "../Models/ImageCategoriesModel";

// 1. State - The global state relate to categories
export class CategoriesState {
    public categories: IImageCategoriesModel[] = []; // Initializes to an empty array at first avoid malfunctions 

}

// // 2. Action Type - list of actions we can do on the above categoriesState:
export enum categoriesActionType {
    FetchCategories = "FetchCategories", // Bring the categories
}

// 3. Action - interface for building a single action from above categoriesActionType
export interface categoriesAction {
    type: categoriesActionType; // The type of the acton to perform.
    payload: any; // The data we need to do that action.
}

// 4. Action Creators - Functions for creating suitable Action objects: 
export function fetchCategoriesAction(categories: IImageCategoriesModel[]): categoriesAction {
    const action: categoriesAction = { type: categoriesActionType.FetchCategories, payload: categories }
    return action
}

// 5. Reducer - Do any of the above actions:
export function categoriesReducer(currentState: CategoriesState = new CategoriesState(), action: categoriesAction) {
    const newState = { ...currentState };

    switch (action.type) {

        case categoriesActionType.FetchCategories:
            newState.categories = action.payload; // <-- here payload is all categories
            break;

    }

    return newState;
}