import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import {Button} from '@rneui/themed';
import { IParamsModel } from '../../../../Models/ParamsModel';
import store from '../../../../Redux/Store';
import ImagesCollectionService from '../../../../Service/ImagesCollectionService';
import { fetchSelectedCategoryAction } from '../../../../Redux/selectedCategoryState';


export interface INavigationButton{
    title:'next'|'prev',
}

export default function NavigationButton(props:INavigationButton): JSX.Element {



useEffect(() => {
            // Subscribe for redux changes: 
            const unsubscribe = store.subscribe(() => {
                const dup = {...store.getState().selectedCategoryState.selectedCategory};
                setSelectedCategoryAndPage(dup);
            });
    
            // unsubscribe:
            return () => {
                unsubscribe();
            };
  }, []);

  const [selectedCategoryAndPage, setSelectedCategoryAndPage] = useState<IParamsModel>();

 

  const getImages = ()=>{

    let newPage:number = selectedCategoryAndPage.page
     
      switch(props.title){
        case 'next':
            newPage = newPage+1
        break;
        case 'prev':
            newPage = newPage-1
        break;

      }
      if(newPage > 0){
           ImagesCollectionService.getImagesCollection({category:selectedCategoryAndPage.category, page:newPage})
          store.dispatch(fetchSelectedCategoryAction({category:selectedCategoryAndPage.category, page:newPage})); // Add Selected Category and page to Redux.
      }
  }


  return (
    <SafeAreaView style={styles.container} >
        <Button title={props.title} onPress={()=>{getImages()}}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    // backgroundColor: '#fff',
    // paddingTop: Platform.OS === 'android' ? 20 : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
