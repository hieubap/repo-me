const connector = {
  state: {
    currentAddress: null,
  },
  reducers: {
    updateData(state, payload = {}) {
      return { ...state, ...payload };
    },
  },
  effects: (dispatch) => ({
    connect: () => {
      const provider = window.ethereum;
      console.log(window, "window???");
      provider
        .request({
          method: "eth_requestAccounts",
          // params: [{ chainId: "0x61" }],
        })
        .then((res) => {
          if (res && res.length > 0) {
            dispatch.connector.updateData({
              currentAddress: res[0],
            });
          }
        });
    },
  }),
};

export default connector;
