import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  reducers: {
    sortByPriceAscending: (state) => {
      // Create a shallow copy of the original array
      const newArray = state.products.slice();
      for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
          if (newArray[j].price > newArray[j + 1].price) {
            // Swap the elements
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
          }
        }
      }
      state.products = newArray;
    },
    sortByPriceDescending: (state) => {
      // Create a shallow copy of the original array
      const newArray = state.products.slice();
      for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
          if (newArray[j].price < newArray[j + 1].price) {
            // Swap the elements
            let temp = newArray[j];
            newArray[j] = newArray[j + 1];
            newArray[j + 1] = temp;
          }
        }
      }
      state.products = newArray;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        // remove duplicates
        state.products = state.products.filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.name === value.name)
        );
        console.log(state.products);
        state.products[0].price = 400;
        state.products[0].description =
          "Google Pixel 6 Pro 5G Se il dispositivo è caldo. Tuttavia, questo è prevedibile e può essere caldo, soprattutto quando si riproducono video, giochi o altri media.";
        state.products[0].image =
          "https://m.media-amazon.com/images/I/51IOgjuH61L._AC_UF1000,1000_QL80_DpWeblab_.jpg";
        state.products[1].price = 450;
        state.products[1].description =
          "Questo prodotto usato o ricondizionato è stato ispezionato e testato professionalmente per funzionare e apparire come nuovo. ";
        state.products[1].image =
          "https://m.media-amazon.com/images/I/71sNNCTfMuL._AC_SL1500_.jpg";
        state.products[2].price = 800;
        state.products[2].description = "nice phone";
        state.products[2].image =
          "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_SL1500_.jpg";
        state.products[3].price = 500;
        state.products[3].description =
          "Come parte dei nostri sforzi per raggiungere i nostri obiettivi ambientali, iPhone 11 non include più un alimentatore o EarPods. Utilizza l'adattatore di alimentazione Apple e le cuffie esistenti o acquista questi accessori separatamente";
        state.products[3].image =
          "https://m.media-amazon.com/images/I/71i2XhHU3pL._AC_SL1500_.jpg";
        state.products[4].price = 700;
        state.products[4].description =
          "Sistema a doppia fotocamera da 12MP (ultra-grandangolo e grandangolo) con modalità Notte, modalità Ritratto e registrazione video 4K fino a 60 fps";
        state.products[4].image =
          "https://m.media-amazon.com/images/I/716anBvFOfL._AC_SL1500_.jpg";
        state.products[5].price = 100;
        state.products[5].image =
          "https://m.media-amazon.com/images/I/41g4Idd4y9L._AC_SL1024_.jpg";
        state.products[5].description =
          "A versatile product suitable for various tasks.";

        state.products[6].price = 1500;
        state.products[6].image =
          "https://m.media-amazon.com/images/I/612Lxme7LWL._AC_SL1500_.jpg";
        state.products[6].description =
          "A high-end product designed for professional use.";

        state.products[7].price = 150;
        state.products[7].image =
          "https://m.media-amazon.com/images/I/71S1lgAvWRL._AC_SL1500_.jpg";
        state.products[7].description =
          "An affordable option with great features.";

        state.products[8].price = 100;
        state.products[8].image =
          "https://m.media-amazon.com/images/I/61BehGyHzHL._AC_SL1500_.jpg";
        state.products[8].description =
          "A compact and lightweight solution for everyday needs.";

        state.products[9].price = 300;
        state.products[9].image =
          "https://m.media-amazon.com/images/I/71uoSV96ToL._AC_SL1500_.jpg";
        state.products[9].description = "A durable product built to last.";

        state.products[10].price = 350;
        state.products[10].image =
          "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SL1500_.jpg";
        state.products[10].description =
          "An innovative product with cutting-edge technology.";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://api.restful-api.dev/objects");
    const data = await response.json();
    return data;
  }
);

export const { sortByPriceAscending, sortByPriceDescending } =
  productsSlice.actions;

export default productsSlice.reducer;
