import React, { useEffect, useState } from "react";
import {FlatList,SafeAreaView,StyleSheet,ActivityIndicator, Text, TouchableOpacity} from "react-native";
import {  Dialog, Image } from "@rneui/themed";
import { IImageModel } from "../../Models/ImageModel";
import store from "../../Redux/Store";
import { IParamsModel } from "../../Models/ParamsModel";


export default function ImagesListComponent(): JSX.Element {

  const [imagesCollection, setImagesCollection] = useState<IImageModel[]>([]);

  useEffect(() => {

    // Subscribe for redux changes:
    const unsubscribe = store.subscribe(() => {
        // Step-1: get thr data from redux library.
      const dup = {...store.getState().imagesCollectionState.imagesCollection}; // get from redux library the data of the images collection.
      const params: IParamsModel = store.getState().selectedCategoryState.selectedCategory; // get from redux library the data of the selected params.

        // Step-2: If there is data on both images and selected parameters, update the variable with the requested images according to the params.
      if (dup && params) {
        const isCategory = dup.hasOwnProperty(params.category); //  complexity O(1)
        const images = isCategory && dup[params.category].get(params.page);
        setImagesCollection(images);
      }
    });

    // unsubscribe:
    return () => {
      unsubscribe();
    };
  }, []);
  const [visible1, setVisible1] = useState<boolean>(false);
  const [displayDialog,setDisplayDialog] = useState<IImageModel[]>([])

  const toggleDialog1 = () => {
      setVisible1(!visible1);
    };
  
    const toggleDialog2 = (item:IImageModel) => {
        setDisplayDialog([item])
          setVisible1(!visible1);
        };


  return (

    <>
{displayDialog.length>0 &&

<SafeAreaView>

<Dialog
isVisible={visible1}
onBackdropPress={toggleDialog1}
>
<Dialog.Title title="Image details"/>

<Text>Id: {displayDialog[0].id}</Text>
<Text>Category: {displayDialog[0].category}</Text>
<Text>Views: {displayDialog[0].views}</Text>
<Text>Likes: {displayDialog[0].likes}</Text>
<Text>Downloads: {displayDialog[0].downloads}</Text>

</Dialog>
</SafeAreaView>
}
<SafeAreaView style={styles.container}>

      <SafeAreaView style={styles.list}>
        {imagesCollection && (
          <FlatList
            data={imagesCollection}
            style={styles.list}
            numColumns={3}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => (
                <TouchableOpacity onPress={()=>toggleDialog2(item.item)} style={styles.item}>
              <Image
                source={{ uri: item.item.webformatURL }}
                containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator/>}
              />
                </TouchableOpacity>

            )}
          />
        )}
      </SafeAreaView>
</SafeAreaView>

    </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        position:'relative',
        zIndex:-1,

      },
  list: {
    flex: 8,
    width: "100%",
  },
  item: {
    aspectRatio: 1,
    width: "100%",
    flex: 1,
  },
});
