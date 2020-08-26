export const ADD_FEATURE = "ADD_FEATURE";
export const DEL_FEATURE = "DEL_FEATURE";

export const addFeature = (newFeature) => {
   console.log(newFeature)
    return {type: ADD_FEATURE, payload: newFeature}
}

export const deleteFeature = (deleteFeature) => {
    console.log("from del", deleteFeature)
    return {type: DEL_FEATURE, payload: deleteFeature}
}