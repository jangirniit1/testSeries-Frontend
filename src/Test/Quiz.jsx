import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Quiz() {
  const { examType } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [status, setStatus] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200);
  const [language, setLanguage] = useState("english");

  const userName = localStorage.getItem("userName");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = "";
        switch (examType) {
          case "ssc":
            apiUrl =
              "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple&encode=url3986";
            break;
          case "railway":
            apiUrl =
              "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple&encode=url3986";
            break;
          case "bank":
            apiUrl =
              "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple&encode=url3986";
            break;
          default:
            apiUrl =
              "https://opentdb.com/api.php?amount=50&category=9&difficulty=medium&type=multiple&encode=url3986";
        }
        const { data } = await axios.get(apiUrl);
        console.log(data.results);

        const formattedQuestions = data.results.map((item) => {
          const options = [
            decodeURIComponent(item.correct_answer),
            ...item.incorrect_answers.map((ans) => decodeURIComponent(ans)),
          ];

          const allOptions = options.sort(() => Math.random() - 0.5);

          return {
            question: decodeURIComponent(item.question),
            options: allOptions,
            correctAnswer: decodeURIComponent(item.correct_answer),
          };
        });
        setQuestions(formattedQuestions);
        const initialStatus = {};
        formattedQuestions.forEach((_, index) => {
          initialStatus[index] = "Not Visited";
        });
        setStatus(initialStatus);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    if (timeLeft === 0) {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSelect = (option) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  const updateStatus = (index, newStatus) => {
    setStatus((prev) => ({
      ...prev,
      [index]: newStatus,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      if (selectedAnswers[currentQuestion]) {
        updateStatus(currentQuestion, "Answered");
      } else {
        updateStatus(currentQuestion, "Not Answered");
      }
      setCurrentQuestion(currentQuestion + 1);
      if (status[currentQuestion + 1] === "Not Visited") {
        updateStatus(currentQuestion + 1, "Not Answered");
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleClearResponse = () => {
    setSelectedAnswers((prev) => {
      const newAnswers = { ...prev };
      delete newAnswers[currentQuestion];
      return newAnswers;
    });
    updateStatus(currentQuestion, "Not Answered");
  };

  const handleMarkForReview = () => {
    if (selectedAnswers[currentQuestion]) {
      updateStatus(currentQuestion, "Marked & Answered");
    } else {
      updateStatus(currentQuestion, "Marked");
    }
    if (currentQuestion < questions.length - 1) {
      const nextQues = currentQuestion + 1;
      setCurrentQuestion(nextQues);

      updateStatus(nextQues, "Marked For Review");
    }
  };

  const handleSubmit = () => {
    alert("Test Submitted! Check your results.");
  };

  return (
    <>
      <div className="m-5 ">
        <div className="flex justify-between ">
          <h2>Question No. {currentQuestion + 1} </h2>
          <h3>
            Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}{" "}
          </h3>
          <select
            value={language}
            id=""
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
        <div className="flex">
          <div className="w-[80%] border-2 relative ">
            <div className="">
              <div>
                {questions.length > 0 && (
                  <div>
                    <h2>{questions[currentQuestion].question} </h2>
                    <div>
                      {questions[currentQuestion].options.map((opt, i) => (
                        <div key={i}>
                          <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            value={opt}
                            checked={selectedAnswers[currentQuestion] === opt}
                            onChange={() => handleSelect(opt)}
                            className="cursor-pointer"
                          />
                          <label htmlFor="">{opt} </label>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="flex  mx-5 absolute bottom-5 gap-110 ">
                <div className="">
                  <button
                    onClick={handleMarkForReview}
                    className="border-2 rounded-lg text-lg px-4 py-2 me-3 cursor-pointer"
                  >
                    Mark for Review & Next
                  </button>
                  <button
                    onClick={handleClearResponse}
                    className="border-2 rounded-lg text-lg px-4 py-2 cursor-pointer "
                  >
                    Clear Response
                  </button>
                </div>
                <div>
                  <button
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className="border-2 rounded-lg text-lg px-4 py-2 me-3 cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentQuestion === questions.length - 1}
                    className="border-2 rounded-lg text-lg px-4 py-2 cursor-pointer "
                  >
                    Save & Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[20%] border-2 ">
            <div>
              <h3>User Name</h3>
            </div>
            <div className="flex flex-wrap gap-x-3 text-[10px] gap-y-1">
              <h4>
                <span className="border rounded-xl w-5 inline-block text-center mx-1">
                  {Object.values(status).filter((s) => s === "Answered").length}
                </span>
                Answered
              </h4>
              <h4>
                <span className="border rounded-xl w-5 inline-block text-center me-1">
                  {
                    Object.values(status).filter((s) => s === "Not Answered")
                      .length
                  }
                </span>
                Not Answered
              </h4>
              <h4>
                <span className="border rounded-xl w-5 inline-block text-center me-1">
                  {
                    Object.values(status).filter((s) => s === "Not Visited")
                      .length
                  }
                </span>
                Not Visited
              </h4>
              <h4>
                <span className="border rounded-xl w-5 inline-block text-center mx-1">
                  {Object.values(status).filter((s) => s === "Marked").length}
                </span>
                Marked
              </h4>
              <h4>
                <span className="border rounded-xl w-5 inline-block text-center me-1">
                  {
                    Object.values(status).filter(
                      (s) => s === "Marked & Answered"
                    ).length
                  }
                </span>
                Marked and Answered
              </h4>
            </div>
            <div>
              <h3>SECTION: Test</h3>
            </div>
            <div>
              <div className="flex flex-wrap m-3 gap-2 justify-center">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`w-10 border rounded-xl cursor-pointer ${
                      status[index] === "Answered"
                        ? "bg-green-500"
                        : status[index] === "Not Answered"
                        ? "bg-red-500"
                        : status[index] === "Marked"
                        ? "bg-yellow-500"
                        : status[index] === "Marked & Answered"
                        ? "bg-blue-500"
                        : "bg-gray-500"
                    }`}
                    onClick={() => setCurrentQuestion(index)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div>
                <a href="" className="border-2 rounded-sm text-sm px-4  mx-3">
                  Question Paper
                </a>
                <a href="" className="border-2 rounded-sm text-sm px-4  ">
                  Instructions
                </a>
              </div>
              <div className="my-3">
                <button
                  onClick={handleSubmit}
                  className="cursor-pointer border-2 rounded-lg text-2xl px-22 py-2 mx-3"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
