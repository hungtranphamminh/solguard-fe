import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: 0,
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}));

/* TO BE REMOVED */
export const mockupRes = [
  {
    name: "Reentrancy",
    severity: "Low",
  },
  {
    name: "Unprotected Ether Withdrawal",
    severity: "High",
  },
  {
    name: "Random numbers generation",
    severity: "Low",
  },
  {
    name: "Explicitly mark visibility in function (Set ignoreConstructors to true if using solidity >=0.7.0)",
    severity: "Low",
  },
  {
    name: "Code contains empty blocks",
    severity: "Low",
  },
  {
    name: "GC: Use Custom Errors instead of require statements",
    severity: "Low",
  },
  {
    name: "Block values as a proxy for time",
    severity: "Low",
  },
  {
    name: "Hiding Malicious Code with External Contract",
    severity: "High",
  },
  {
    name: "Dangerous strict equalities",
    severity: "Medium",
  },
];

export const useCodeStore = create((set, get) => ({
  contractCode: [
    {
      name: "Main.sol",
      textContent: "",
      file: null,
      analysisResult: [],
      detailedResult: null,
    },
  ],
  currentFileId: 0,
  anaStat: 0,

  /* change currently focused file in code editor */
  focusFile: (fileIndex) => set((state) => ({ currentFileId: fileIndex })),

  /* changeProcess */
  changeProcess: (status) => set((state) => ({ anaStat: status })),

  /* TO BE REMOVED */
  /* update analyze res */
  updateRes: (res) => {
    const tempInfo = get().contractCode;
    var tempInfo2 = { ...tempInfo[0] };
    tempInfo2.analysisResult = res;
    set((state) => ({ contractCode: [tempInfo2] }));
  },

  /* load new code  */
  loadCode: async (codeFile, isTextContent) => {
    const reader = new FileReader();
    const contractTextContent = isTextContent
      ? ""
      : new Promise((resolve, reject) => {
          reader.onload = (e) => resolve(e.target.result);
          reader.onerror = (e) => reject(e.target.error);
          reader.readAsText(codeFile);
        });

    if (isTextContent) console.log("Text Content: ", isTextContent);

    set({
      contractCode: [
        {
          name: isTextContent ? codeFile.contract_name : codeFile.name,
          textContent: isTextContent
            ? codeFile.content
            : await contractTextContent,
          file: codeFile,
          analysisResult: [],
        },
      ],
    });
  },

  /* unload all code */
  unloadCode: () => set((state) => ({ contractCode: "" })),
}));
