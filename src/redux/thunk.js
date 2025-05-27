import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../api";

export const fetchDataAsyncAction = createAsyncThunk("kitchen-accessories/fetchData", async () => {
    const data = await fetchData();
    return data;
});
