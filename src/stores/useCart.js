import { create } from 'zustand'


export const useCartStore = create((set) => ({
    cart: 0,
    add: () => set((state) => ({ cart: state.cart + 1 })),
    remove: () => set((state) => ({ cart: state.cart - 1 })),
    removeAll: () => set({ cart: 0 }),
}));

export const mockupRes =  [
    {
        level: "low",
        name: "External Call To User-Supplied Address",
        id: "107",
        location: `"example.sol": "15"`,
        description:`A call to a user-supplied address is executed. An external message call to an address specified by the caller is executed. Note that the callee account might contain arbitrary code and could re-enter any function within this contract. Reentering the contract in an intermediate state may lead to unexpected behaviour. Make sure that no state modifications are executed after this call and/or reentrancy guards are in place.`,
        code:`msg.sender.call{value: bal}('')`,
    },
    {
        level: "medium",
        name: "State access after external call",
        id: "108",
        location: `"example.sol": "18"`,
        description:`Write to persistent state following external call. The contract account state is accessed after an external call to a user defined address. To prevent reentrancy issues, consider accessing the state only before the call, especially if the callee is untrusted. Alternatively, a reentrancy lock can be used to prevent untrusted callees from re-entering the contract in an intermediate state.`,
        code:`balances[msg.sender] = 0`,
    },
]

export const useCodeStore = create((set, get) => ({
    contractCode:[{
        name:"Main.sol",
        textContent: "",
        file:null,
        analysisResult: []
    }],
    currentFileId:0,
    anaStat:0,
    
    /* change currently focused file in code editor */
    focusFile: (fileIndex) => set((state) => ({currentFileId:fileIndex})),

    /* changeProcess */
    changeProcess: (status) => set((state)=>({anaStat:status})),

    /* update analyze res */
    updateRes:() => {
        const tempInfo = get().contractCode
        var tempInfo2 = {...tempInfo[0]}
        tempInfo2.analysisResult=mockupRes
        set((state) => ({contractCode:[tempInfo2]}))
    },

    /* load new code  */
    loadCode: async(codeFile) => {

        const reader = new FileReader()
        const contractTextContent = new Promise((resolve, reject) => {
            reader.onload = e => resolve(e.target.result);
            reader.onerror = e => reject(e.target.error);
            reader.readAsText(codeFile);
        });

        set({contractCode:[{
            name:codeFile.name,
            textContent: await contractTextContent,
            file:codeFile,
            analysisResult:[]
        }]})
    }, 
    
    /* unload all code */
    unloadCode:() => set((state) => ({contractCode:""}))
}));