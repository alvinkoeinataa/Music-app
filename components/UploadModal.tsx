"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";

const UploadModal = () => {
  const uploadModal = useUploadModal();

  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onChange = (open: boolean) => {
    if (!open) {
      // reset();
      uploadModal.onClose();
    }
  };
  return (
    <div>
      <Modal title="upload modal title" description="upload an mp3 file" isOpen={uploadModal.isOpen} onChange={onChange}>
        Form
      </Modal>
    </div>
  );
};

export default UploadModal;

// lala
