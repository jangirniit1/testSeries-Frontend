import React from "react";
import { useNavigate } from "react-router-dom";

const exams = [
  {
    image: "images/sscLogo.png",
    name: "SSC Exams Series",
    lang: "Language: Hindi, English",
    test: "220 Total Tests",
    marks: "100",
    view: "View Test Series",
    examType: "ssc",
  },
  {
    image: "images/railwayLogo.png",
    name: "Railway Exams Series",
    lang: "Language: Hindi, English",
    test: "230 Total Tests",
    marks: "100",
    view: "View Test Series",
    examType: "railway",
  },
  {
    image: "images/bankLogo.png",
    name: "Bank Exams Series",
    lang: "Language: Hindi, English",
    test: "250 Total Tests",
    marks: "100",
    view: "View Test Series",
    examType: "bank",
  },
];

function TestSeries(isLoggedIn) {
  const navigate = useNavigate();

  const handleViewTestSeries = (examType) => {
    if (isLoggedIn) {
      navigate(`/quiz/${examType}`);
    } else {
      alert("Please Login to view the test series.");
    }
  };
  return (
    <>
      <div className="mx-40 my-10">
        <h2 className="text-5xl font-semibold text-center">
          Live test Series for all Competitive Exams
        </h2>
        <div className="flex flex-wrap items-center justify-between my-10">
          {exams.map((item) => (
            <div
              key={item.name}
              className=" border-2 leading-8 p-5 my-5 rounded-2xl bg-linear-to-t from-indigo-100 to-blue-300"
            >
              <div className="h-15 max-w-15 rounded-full mx-auto ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <h2 className="text-2xl">{item.name} </h2>
              <h3>{item.lang} </h3>
              <h4>{item.test} </h4>
              <p>Total marks: {item.marks} </p>
              <button
                onClick={() => handleViewTestSeries(item.examType)}
                disabled={!isLoggedIn}
                className={`border-2 rounded-lg px-7 text-lg transition-all duration-1000 ease-in-out relative overflow-hidden z-1 after:text-black after-content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-full  after:-z-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-[0%] before:h-full before:bg-linear-to-r/hsl before:from-indigo-300 before:to-indigo-500 before:transition-all before:duration-1000 before:ease-in-out before:-z-1 hover:text-white hover:before:w-full ${
                  !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {item.view}{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TestSeries;
