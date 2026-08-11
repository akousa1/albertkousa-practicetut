import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/users";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (defaultMid) => defaultMid().concat(usersApi.middleware),
});

setupListeners(store.dispatch);