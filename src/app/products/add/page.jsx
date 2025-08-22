"use client";

import { useState } from "react";

export default function SimpleAddProductForm() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const image = e.target.image.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const facilities = e.target.facilities.value;

    const newErrors = {};
    if (!image.trim()) newErrors.image = "Image URL is required";
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!facilities.trim()) newErrors.facilities = "Facilities are required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({ image, title, description, facilities });
    alert("Product submitted! Check console for data.");
    e.target.reset();
    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="card bg-white w-full max-w-md shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Add New Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Image URL</label>
            <input type="text" name="image" className="input input-bordered w-full" />
            {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
          </div>

          <div>
            <label className="block mb-1">Title</label>
            <input type="text" name="title" className="input input-bordered w-full" />
            {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>

          <div>
            <label className="block mb-1">Description</label>
            <textarea name="description" className="textarea textarea-bordered w-full"></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div>
            <label className="block mb-1">Facilities</label>
            <textarea name="facilities" className="textarea textarea-bordered w-full"></textarea>
            {errors.facilities && <p className="text-red-500 text-sm">{errors.facilities}</p>}
          </div>

          <button type="submit" className="btn btn-primary w-full mt-2">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
