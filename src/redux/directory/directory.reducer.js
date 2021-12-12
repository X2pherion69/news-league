const INITIAL_STATE = {
  sections: [
    {
      title: "Figure Chibi",
      imageUrl:
        "https://product.hstatic.net/1000160337/product/league_of_legends_kda_ahri_1__1__83c084f00d734e058ea5550d922948c1_1024x1024.jpg",
      size: "large",
      id: 1,
      linkUrl: "shop/figure",
      subtitle: "Chuyên bán các loại mô hình cực xịn!",
    },
    {
      title: "Album Music",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/vi/5/5e/KDA_THE_BADDEST.jpeg",
      size: "large",
      id: 2,
      linkUrl: "shop/music",
      subtitle: "Chuyên bán về Album nhạc cực trendy!",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryReducer;
