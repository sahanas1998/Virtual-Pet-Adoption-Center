import React, { useState, useRef } from "react";

function UpdateForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    age: "",
    personality: "",
    adopted: false,
    image: null,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Pet name is required";
    if (!formData.species) errs.species = "Species is required";
    if (!formData.age) errs.age = "Age is required";
    if (!formData.personality) errs.personality = "Personality is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
    } else {
      console.log(formData);
      onClose(); // Close form after successful submit
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:gap-[18px] gap-[12px] text-black">
        <h3 className="md:text-[28px] text-[20px]  font-bold text-center ">
          Update Pet Details
        </h3>

        {/* Pet Name */}
        <div className="flex flex-col gap-[10px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded border-black md:py-4 py-1"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        {/* Species */}
        <div className="flex flex-col gap-[10px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Species
          </label>
          <input
            name="species"
            value={formData.species}
            onChange={handleChange}
            className="border rounded border-black md:py-4 py-1"
          />
          {errors.species && (
            <p className="text-red-600 text-sm">{errors.species}</p>
          )}
        </div>

        {/* Age */}
        <div className="flex flex-col gap-[10px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Age
          </label>
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="border rounded border-black md:py-4 py-1"
          />
          {errors.age && <p className="text-red-600 text-sm">{errors.age}</p>}
        </div>

        {/* Personality */}
        <div className="flex flex-col gap-[10px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Personality
          </label>
          <select
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            className="border rounded border-black md:py-4 py-1"
          >
            <option value="">Select</option>
            <option>Friendly</option>
            <option>Aggressive</option>
            <option>Shy</option>
            <option>Playful</option>
          </select>
          {errors.personality && (
            <p className="text-red-600 text-sm">{errors.personality}</p>
          )}
        </div>

        {/* Adopted (Boolean) */}
        <div className="flex flex-col gap-[10px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Has Been Adopted?
          </label>
          <select
            name="adopted"
            value={formData.adopted}
            onChange={(e) =>
              setFormData({ ...formData, adopted: e.target.value === "true" })
            }
            className="border rounded border-black md:py-4 py-1"
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        {/* Upload Image */}
        <div className="flex flex-col md:gap-[10px] gap-[8px]">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <button
            type="button"
            className="w-full bg-black text-white  md:py-4 py-2 rounded font-bold md:text-[20px] text-[14px]"
            onClick={triggerFileInput}
          >
            Upload Image
          </button>
          {formData.image && (
            <p className="text-green-600 text-sm">
              Image selected: {formData.image.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF5500] text-black  md:py-4 py-2 rounded font-bold md:text-[20px] text-[14px]"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default UpdateForm
