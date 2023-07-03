import axios from 'axios';
import React, { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState<{
    title: string;
    image: string;
  }>({
    title: '',
    image: '',
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.file ? e.target.file[0] : e.target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(e.target['file'].files[0]);
    const form = new FormData();
    form.append('title', e.target['title'].value);
    form.append('file', e.target['file'].files[0]);
    const response = await axios.post(
      'https://api.cloudinary.com/v1_1/demo/image/upload',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    console.log(response.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="title" onChange={handleChange} />

        <input name="file" onChange={handleChange} type="file" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
