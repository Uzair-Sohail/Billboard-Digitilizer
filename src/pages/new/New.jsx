import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const savedProduct = await response.json();
        console.log("Product saved:", savedProduct);
        // Add any success handling logic here
      } else {
        console.error("Error saving product:", response.statusText);
        // Add any error handling logic here
      }
    } catch (error) {
      console.error("Error saving product:", error);
      // Add any error handling logic here
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
          <form onSubmit={handleSubmit}>
              {inputs.map(({ id, label, type, placeholder }) => (
                <div className="formInput" key={id}>
                  <label>{label}</label>
                  <input
                    type={type}
                    name={label.toLowerCase().replace(/\s/g, "")} // Generate name attribute from label (e.g., title, billboardLocation)
                    placeholder={placeholder}
                    value={formData[label.toLowerCase().replace(/\s/g, "")]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;