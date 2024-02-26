import { create } from "zustand";

interface PreviewModalStore {
  isOpen: boolean;
  data?: ProductTypes;
  onOpen: (data: ProductTypes) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductTypes) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
