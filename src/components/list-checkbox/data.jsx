export const newData = {
  getTreeNodesData() {
    return [
      {
        key: "0",
        label: "หมวด 1",
        data: "to-do item",
        icon: "",
        children: [
          {
            key: "0-0",
            label: "1.1",
            data: "Work Folder",
            icon: "",
            children: [
              { key: "0-0-0", label: "1.1.1", icon: "", data: "" },
              { key: "0-0-1", label: "1.1.2", icon: "", data: "" },
            ],
          },
          {
            key: "0-1",
            label: "1.2",
            data: "Home Folder",
            icon: "",
            children: [{ key: "0-1-0", label: "1.2.1", icon: "", data: "" }],
          },
        ],
      },
      {
        key: "1",
        label: "หมวด 2",
        data: "to-do item",
        icon: "",
        children: [
          {
            key: "1-0",
            label: "2.1",
            icon: "",
            data: "Meeting",
            children: [{ key: "0-1-0", label: "1.2.1", icon: "", data: "" }],
          },
          { key: "1-1", label: "2.2", icon: "", data: "" },
          { key: "1-2", label: "2.3", icon: "", data: "" },
        ],
      },
      {
        key: "2",
        label: "หมวด 3",
        data: "to-do item",
        icon: "",
        children: [],
      },
    ];
  },

  getTreeNodes() {
    return Promise.resolve(this.getTreeNodesData());
  },
};
