import React, { useState, useRef } from "react";

function UpdateForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    age: "",
    personality: "",
    adopted: false,
    image: null,
    mood: "",
    adoption_date: Date,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Pet name is required";
    if (!formData.species) errs.species = "Species is required";
    if (!formData.age) errs.age = "Age is required";
    if (!formData.personality) errs.personality = "Personality is required";
    if (!formData.mood) errs.mood = "Mood is required";
    if (!formData.adoption_date) errs.adoption_date = "Select the adopted date";
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
        <h3 className="md:text-[28px] text-[20px] font-bold text-center">
          Udpate the pet details
        </h3>

        {/* Pet Name */}
        <div className="flex flex-col md:gap-[10px] gap-[8px]">
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
        <div className="flex flex-col  md:gap-[10px] gap-[8px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Species
          </label>
          <select
            name="species"
            value={formData.species}
            onChange={handleChange}
            className="border rounded border-black  md:py-4 py-1"
          >
            <option value="">Select</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Parrot</option>
            <option>Lovebirds</option>
            <option>Pigeon</option>
          </select>
          {errors.species && (
            <p className="text-red-600 text-sm">{errors.species}</p>
          )}
        </div>

        {/* Age */}
        <div className="flex flex-col  md:gap-[10px] gap-[8px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Age
          </label>
          <input
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            className="border rounded border-black  md:py-4 py-1"
          />
          {errors.age && <p className="text-red-600 text-sm">{errors.age}</p>}
        </div>

        {/* Personality */}
        <div className="flex flex-col  md:gap-[10px] gap-[8px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Personality
          </label>
          <select
            name="personality"
            value={formData.personality}
            onChange={handleChange}
            className="border rounded border-black  md:py-4 py-1"
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

        {/* Mood */}
        <div className="flex flex-col  md:gap-[10px] gap-[8px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Pet Mood
          </label>
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="border rounded border-black  md:py-4 py-1"
          >
            <option value="">Select</option>
            <option>Happy</option>
            <option>Sad</option>
            <option>Excited</option>
          </select>
          {errors.mood && <p className="text-red-600 text-sm">{errors.mood}</p>}
        </div>

        {/* Adopted (Boolean) */}
        <div className="flex flex-col md:gap-[10px] gap-[8px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Has Been Adopted?
          </label>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.adopted}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  adopted: e.target.checked,
                  adoption_date: "",
                })
              }
              className="w-4 h-4"
            />
            <span className="text-[14px] md:text-[18px]">
              {formData.adopted ? "Yes" : "No"}
            </span>
          </div>

          {formData.adopted && (
            <div className="flex flex-col gap-[6px]">
              <label className="md:text-[18px] text-[14px] font-medium">
                Adoption Date
              </label>
              <input
                type="date"
                value={formData.adoption_date}
                onChange={(e) =>
                  setFormData({ ...formData, adoption_date: e.target.value })
                }
                className="border rounded border-black md:py-3 py-1 px-2"
              />
              {errors.adoption_date && (
                <p className="text-red-600 text-sm">{errors.adoption_date}</p>
              )}
            </div>
          )}
        </div>

        {/* Upload Image */}
        <div className="flex flex-col  md:gap-[10px] gap-[4px]">
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


export default UpdateForm;
