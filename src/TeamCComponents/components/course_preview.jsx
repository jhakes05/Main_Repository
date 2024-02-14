import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../TeamCComponents/css/base_style.css";

function CoursePreview() {
  const [chapters, setChapters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const response = await axios.get("http://localhost:8080/chapter");
        console.log("Response Data:", response.data); // Log response data
        setChapters(response.data);
      } catch (error) {
        console.error("Error fetching chapters:", error);
        setError(error.message);
      }
    };

    fetchChapters();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="c_cardpreview_cardouter">
    <div className="card-container" id="c_cardview_sql" data-card="course_sql">
      <div className="row" >
        {chapters.map((chapterData, index) => (
          <div key={index} className="col-md-4">
            <div className="card border-success" style={{ maxWidth: '225px', borderRadius: '10px' }}>
            <div className="card-header bg-transparent border-success"></div>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title fw-bold text-center h-100 text-success" style={{ fontSize: '1.7rem' }}>{chapterData.chapterTitle}</h5>
                
                <hr/><p className="card-body bg-transparent border-success d-flex flex-column">{chapterData.chapterDescription}</p>
                <a className='stretched-link ms-auto fw-bold' id='c_course_seemoretext' data-bs-toggle="modal" data-bs-target="#modal_seemoresql">See more..</a><br />
                <div className="d-flex justify-content-center align-items-end mt-auto">
              </div>
                <a href="#" className="btn btn-primary">
                  Enroll Now
                </a>
                </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default CoursePreview;
