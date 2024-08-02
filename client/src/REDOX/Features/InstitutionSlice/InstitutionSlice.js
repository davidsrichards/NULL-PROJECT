import { createSlice } from "@reduxjs/toolkit";

/// creating InstitutionSlice slice

const InstitutionSlice = createSlice({
  name: "Institution",
  initialState: {
    InstitutionInfo: {},
    searchedInstitution: [],
    institutionId: "",
    getUsersCode: "",
    getUserId: "",
  },
  reducers: {
    addInstitition: (state, action) => {
      state.InstitutionInfo = action.payload;
    },

    searchedInstitutionAction: (state, action) => {
      state.searchedInstitution = action.payload;
    },

    institutionIdAction: (state, action) => {
      state.institutionId = action.payload;
    },
    getUsersCodeAction: (state, action) => {
      state.getUsersCode = action.payload;
    },
    getUsersIdAction: (state, action) => {
      state.getUserId = action.payload;
    },

    /*  updateInstitutionAction: (state, action) => {
      const { institutionName, institutionCode, institutionId } =
        action.payload;
      const findIndex = state.InstitutionInformation.findIndex(
        (instituion) => instituion.institutionId === institutionId
      );
      if (findIndex !== -1) {
        state.InstitutionInformation[findIndex] = {
          ...state.InstitutionInformation[findIndex],
          institutionName,
          institutionCode,
          institutionId,
        };
      }
    }, */
  },
});

/// expoting InstitutionSlice

export const {
  addInstitition,
  institutionIdAction,
  searchedInstitutionAction,
  getUsersCodeAction,
  getUsersIdAction,
} = InstitutionSlice.actions;
export default InstitutionSlice.reducer;
