import React, { useState, useEffect } from "react";
import { Tree } from "primereact/tree";
import { newData } from "./data";

export default function CheckboxSelectionDemo() {
  const [nodes, setNodes] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState({
    '0-0-0': {
      checked: true,
      partialChecked: false,
    },
    2: {
      checked: true,
      partialChecked: true,
    },
  });

  useEffect(() => {
    newData.getTreeNodes().then((data) => setNodes(data));
  }, []);

  const isNodeAndAllChildrenSelected = (node) => {
    if (!node.children) return selectedKeys[node.key];
    return selectedKeys[node.key] && node.children.every((child) => selectedKeys[child.key]);
  };

  const applyStrikethrough = (node) => {
    return isNodeAndAllChildrenSelected(node) ? "line-through" : "none";
  };

  const modifyNodes = (nodes) => {
    return nodes.map((node) => ({
      ...node,
      label: <span style={{ textDecoration: applyStrikethrough(node) }}>{node.label}</span>,
      children: node.children ? modifyNodes(node.children) : [],
    }));
  };

  return (
    <div className="flex justify-content-center">
      <Tree
        value={modifyNodes(nodes)}
        selectionMode="checkbox"
        selectionKeys={selectedKeys}
        onSelectionChange={(e) => setSelectedKeys(e.value)}
        className="w-full"
      />
    </div>
  );
}
