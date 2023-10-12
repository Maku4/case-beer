import { useState } from "react";

type FirstStepProps = {
  setImage: (value: string) => void;
  image?: string;
};

export function FirstStep({ setImage, image }: FirstStepProps) {
  const [preview, setPreview] = useState<string | undefined>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const objectURL = URL.createObjectURL(file);
      setImage(objectURL);
      setPreview(objectURL);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.items && e.dataTransfer.items[0].kind === "file") {
      const file = e.dataTransfer.items[0].getAsFile();
      if (file) {
        const objectURL = URL.createObjectURL(file);
        setImage(objectURL);
        setPreview(objectURL);
      }
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 p-6 rounded-md"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {preview || image ? (
        <img
          src={preview || image}
          alt="Preview"
          className="mb-4 w-64 h-64 object-cover rounded-md"
        />
      ) : (
        <p className="text-gray-500 mb-4">
          Drop your image here or click below
        </p>
      )}
      <label className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Choose an Image
        <input
          type="file"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
}
