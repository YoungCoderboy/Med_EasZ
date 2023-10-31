import { useState } from "react";
import axios from "axios";
const Documents = () => {
  const [file, setFile] = useState();
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("file", file);

    try {
      const resp = await fetch("/docs",{
        method:'POST',
        body:formData,
      });
      const data = await resp.json();
      if(resp.ok){
        alert('File uploaded Successfully!!');
      }
      else{
        console.error('Something went wrong!!');
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="docupload">Upload your documents here</h2>
      <div className="documents">
        <form onSubmit={handleUpload}>
          <input type="file" name="docs" id="docs" onChange={handleFile}   />
          <input type="submit" value="Submit" className="btn"/>
        </form>
      </div>
    </div>
  );
};
export default Documents;
