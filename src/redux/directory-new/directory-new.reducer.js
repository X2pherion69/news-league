const INITIAL_STATE = {
  sections: [
    {
      title: "GIẢI ĐẤU",
      imageUrl: "https://images3.alphacoders.com/118/thumb-1920-1187697.png",
      id: 1,
      linkUrl: "news/tournaments",
      subtitle: "Thông tin về các giải đấu...",
    },
    {
      title: "VIDEO HIGHLIGHT",
      imageUrl: "https://images6.alphacoders.com/114/thumb-1920-1142244.jpg",
      id: 2,
      linkUrl: "news/videos",
      subtitle: "Thông tin về những loạt video giải trí...",
    },
    {
      title: "THAY ĐỔI CẬP NHẬT",
      imageUrl: "https://images8.alphacoders.com/657/thumb-1920-657974.jpg",
      id: 3,
      linkUrl: "news/updates",
      subtitle: "Thông tin về bản cập nhật...",
    },
  ],
};

const directoryNewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default directoryNewReducer;
