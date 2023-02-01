import { combineReducers, createStore } from "redux";
import { authReducer } from "./AuthState";
import { categoriesReducer } from "./ImageCategoriesState";
import { imagesCollectionReducer } from "./ImagesCollectionState";
import { selectedCategoryReducer } from "./selectedCategoryState";

// Single object containing all reducers:
const reducers = combineReducers({
    imagesCollectionState:  imagesCollectionReducer,
    categoriesState: categoriesReducer,
    authState: authReducer,
    selectedCategoryState: selectedCategoryReducer 
});

const store = createStore(reducers);

export default store;