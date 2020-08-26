export const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      };

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FEATURE":
            const newAddPriceAdd = state.additionalPrice + action.payload.price;
            const newFeatAdd = state.car.features;
            newFeatAdd.push(action.payload)
      
            newFeatAdd.map((item, i) => {
              if(action.payload === item[i])
              newFeatAdd.splice(item, 1);
            })
            return {
                ...state,
                additionalPrice: newAddPriceAdd,
                ...state.car,
                features: newFeatAdd
               
            }
            case "DEL_FEATURE":
              const newAddPriceDel = state.additionalPrice - action.payload.price;
              const newFeatDele = state.car.features;
              newFeatDele.filter((item) => { 
                if (item === action.payload)
                newFeatDele.splice(item, 1);
              
              })
               return {
                  ...state, 
                  additionalPrice: newAddPriceDel,
                  ...state.car,
                  features: newFeatDele
        

                    
                }
        default: 
        return state;
    }
  
}