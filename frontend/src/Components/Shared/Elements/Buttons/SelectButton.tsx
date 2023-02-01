import React, { useEffect, useState } from "react";
import { ListItem } from "@rneui/themed";
import { ScrollView, StyleSheet} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import imagesCategoriesService from "../../../../Service/ImagesCategoriesService";
import { IImageCategoriesModel } from "../../../../Models/ImageCategoriesModel";
import imagesCollectionService from "../../../../Service/ImagesCollectionService";
import { IParamsModel } from "../../../../Models/ParamsModel";
import store from "../../../../Redux/Store";
import { fetchSelectedCategoryAction } from "../../../../Redux/selectedCategoryState";


export default function  SelectButton(): JSX.Element  {

//   // state to handle Categories:
  const [categoriesList, setCategories] = useState<IImageCategoriesModel[]>([]);
  // state to handle selected category:
  const [selectedCategory, setSelectedCategory] = useState<IParamsModel[]>([]);
 // state to handle expanded Accordion:
  const [expanded, setExpanded] = useState<boolean>(false);

  // Get Categories from backend once:
  useEffect(() => {
    imagesCategoriesService.getImageCategoriesList()
      .then((Categories) => {
        setCategories(Categories); // Set list of all categories
        setSelectedCategory([{category:Categories[0].name,page:1}]) // Set the first category and page as default
        imagesCollectionService.getImagesCollection({category:Categories[0].name,page:1}).then(()=>{
            store.dispatch(fetchSelectedCategoryAction({category:Categories[0].name,page:1})); // Add default Selected Category and page to Redux.
        })
    })
      .catch((err) => {
        console.log('SelectButton',err)
        alert(err);
      });

    return;
  }, []);



  // Category selection function  
  const selectCategory = (params: IParamsModel)=>{
    imagesCollectionService.getImagesCollection(params) // Get images collection 
    store.dispatch(fetchSelectedCategoryAction(params)); // Add Selected Category to Redux
    setSelectedCategory([params]) // Set selected category 
    setExpanded(!expanded) // Close accordion
}

  return (

    <SafeAreaProvider style={styles.container} >

        {selectedCategory.length>0 && 
      <ListItem.Accordion  
        content={
          <>
            <ListItem.Content >
              <ListItem.Title style={styles.title}>{selectedCategory[0].category}</ListItem.Title>
            </ListItem.Content>
          </>
        }
        containerStyle={styles.accordion}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
        
        <ScrollView>
          {categoriesList.map((l, i) => (
            <ListItem containerStyle={styles.item} key={i} onPress={() => {selectCategory({ category: l.name, page: 1 })}} >
              <ListItem.Content >
                <ListItem.Title>{l.name}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </ScrollView>
      </ListItem.Accordion>
        }

    </SafeAreaProvider>
    
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
            position:'relative',
            width:'100%',
        zIndex:9999,
  },
  accordion:{
    backgroundColor: "#2089dc",
    marginHorizontal:10,
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
    
  },

  item: { 
    backgroundColor: "#fff",
    marginHorizontal:10,

  }
});
