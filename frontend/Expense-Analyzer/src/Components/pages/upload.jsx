import axios from "axios";

function Upload({ setAnalytics }) {

  const handleFileUpload = async (e) => {

    const file = e.target.files[0];

    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:8000/upload",
      formData
    );

    console.log(response.data);

    setAnalytics(response.data);
  };

  return (

    <div className="card shadow p-4 mt-4">

      <h4>Upload CSV File</h4>

      <input
        type="file"
        className="form-control mt-3"
        onChange={handleFileUpload}
      />

    </div>

  );
}

export default Upload;