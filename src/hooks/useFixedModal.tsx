import React, { useState } from "react";
import usePortal from "react-cool-portal";

export default (): [
  React.FC<{
    children: React.ReactNode;
  }>,
  boolean,
  () => void,
  () => void
] => {
  const [isModalVisible, setModalVisible] = useState(false);
  const { Portal, show, hide } = usePortal({
    defaultShow: false,
    clickOutsideToHide: false,
    escToHide: true,
    containerId: "fixed-modal-container",
    onShow: () => {
      setModalVisible(true);
    },
    onHide: () => {
      setModalVisible(false);
    },
  });
  return [Portal, isModalVisible, show, hide];
};
