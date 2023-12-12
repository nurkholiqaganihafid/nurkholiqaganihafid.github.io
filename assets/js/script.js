document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      name: "SQL",
      difficulty: "-",
      technology1: "sql",
      image: "assets/image/dummy-cover.jpg",
      url: "#",
      description: "-",
      status: "in progress",
    },
    {
      name: "E-Commerce Marketplace Analysis",
      difficulty: "intermediate",
      technology1: "python",
      technology2: "streamlit",
      image:
        "https://private-user-images.githubusercontent.com/89395541/282230179-c6e2b4f6-64a9-442a-ac38-26a0140a667b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNDgwOTAsIm5iZiI6MTcwMjM0Nzc5MCwicGF0aCI6Ii84OTM5NTU0MS8yODIyMzAxNzktYzZlMmI0ZjYtNjRhOS00NDJhLWFjMzgtMjZhMDE0MGE2NjdiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDAyMjMxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJmNzk5OTNhNWM0Y2VlNTgyNDhhNGZhZGJmMDA2YzgwOGRmYjg4ZWFhYWI4ZTkwYjYwNWYxMjA0OTUzOWUxMmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.o8YMhHEt-Tw7LTRPe36AZD7TvmysCW8yYr94PN29y2I",
      url: "https://github.com/nurkholiqaganihafid/E_Commerce_Marketplace_Analysis",
      description:
        "Provided valuable insights to e-commerce businesses on optimizing sales strategies, increasing customer satisfaction, and optimizing product delivery.",
      status: "completed",
    },
    {
      name: "Predict daily sales of Kalbe products",
      difficulty: "advanced",
      technology1: "python",
      technology2: "sql",
      technology3: "tableau",
      image:
        "https://private-user-images.githubusercontent.com/89395541/271940646-043615cf-8be3-4885-984e-b8a3df66eab9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNTAyODMsIm5iZiI6MTcwMjM0OTk4MywicGF0aCI6Ii84OTM5NTU0MS8yNzE5NDA2NDYtMDQzNjE1Y2YtOGJlMy00ODg1LTk4NGUtYjhhM2RmNjZlYWI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDAyNTk0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmNzI0ODA3ZmI3ZTY0OGRjYTFlMWI1YjJmZGZlZDVlNDM2NzM4YzAzNDQxMjhmMGY3MmQ5MDA0NDhkNzU2NjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.2TStCjajtcQA-6SZcQB0_BnmJZt2rvxO2Faxn7tK9C0",
      url: "https://github.com/nurkholiqaganihafid/Kalbe_Nutritionals_Data_Scientist_Project",
      description:
        "Assisted the marketing team in providing promotions and personal sales treatment to customers.",
      status: "completed",
    },
    {
      name: "Online Fashion Data Analysis",
      difficulty: "intermediate",
      technology1: "python",
      technology2: "streamlit",
      image:
        "https://private-user-images.githubusercontent.com/89395541/277867073-b2953718-3ac9-4f39-af8b-63f2df9ee8e4.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNTAyMzcsIm5iZiI6MTcwMjM0OTkzNywicGF0aCI6Ii84OTM5NTU0MS8yNzc4NjcwNzMtYjI5NTM3MTgtM2FjOS00ZjM5LWFmOGItNjNmMmRmOWVlOGU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDAyNTg1N1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY3NGVhZGIwY2Q4YjE2MjJkMzAzMTk3MzlmNGEzNGJkMzBlMzk2YzAzYTIzYWEwMjY3YzNiOGU0NjQ1MzRmZTMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.WQ6RjIkv8lbg9H_y85qvwHBm0NZlnv4BBdebi9eQIEs",
      url: "https://github.com/nurkholiqaganihafid/Online_Fashion_Data_Analysis",
      description:
        "Evaluated company sales performance, understood the most and least sold fashion products, and gained a deeper understanding of customer demographics.",
      status: "completed",
    },
    {
      name: "Analysis Student Dropout Rates",
      difficulty: "advanced",
      technology1: "python",
      technology2: "streamlit",
      technology3: "tableau",
      image:
        "https://private-user-images.githubusercontent.com/89395541/280511353-ce59b58d-0373-4054-9dcf-4d1bdd24fc5c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNTA1MTQsIm5iZiI6MTcwMjM1MDIxNCwicGF0aCI6Ii84OTM5NTU0MS8yODA1MTEzNTMtY2U1OWI1OGQtMDM3My00MDU0LTlkY2YtNGQxYmRkMjRmYzVjLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDAzMDMzNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRhOGRiMTU4MDc3MDE1Y2ExN2M3N2Y2ZmQxY2Q2MmZjZDk5OTI5OTM1YTMxOTM5Mjk5YTY5OThjYmUyODI5OGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.JD2ym1UYqLHhL9AEkLzAsqHD2VZJhMgfCi4hPw9YFic",
      url: "https://github.com/nurkholiqaganihafid/Analysis_Student_Dropout_Rates",
      description:
        "Understood school dropout rates, identified related factors, and provided recommendations for increasing student graduation rates.",
      status: "completed",
    },
    {
      name: "Diamond Predictive Analytics",
      difficulty: "advanced",
      technology1: "python",
      image:
        "https://github.com/nurkholiqaganihafid/Diamond_Predictive_Analytics/assets/89395541/90235238-f8c8-4c99-882c-8232415f00aa",
      url: "https://github.com/nurkholiqaganihafid/Diamond_Predictive_Analytics",
      description:
        "Predicted diamond prices. Predictions will be used to determine the appropriate purchase price for diamonds with certain characteristics so that the company can obtain the maximum profit.",
      status: "completed",
    },
    {
      name: "Handwriting Recognition Image Classification",
      difficulty: "intermediate",
      technology1: "python",
      image:
        "https://github.com/nurkholiqaganihafid/Handwriting_Recognition_Image_Classification/assets/89395541/d1ab8955-db8c-416d-a3e3-b3a08a54d8b9",
      url: "https://github.com/nurkholiqaganihafid/Handwriting_Recognition_Image_Classification",
      description:
        "Developed ML models for image classification, then converted those models into the TF-Lite file format, which can be embedded on Android and iOS. This dataset consists of more than four hundred thousand handwritten names collected through charity projects.",
      status: "completed",
    },
    {
      name: "Time Series Covid-19 World Vaccination Progress",
      difficulty: "intermediate",
      technology1: "python",
      image:
        "https://private-user-images.githubusercontent.com/89395541/257991767-f97ac9c7-112a-42f1-9fee-0284608ef98a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIzNTIxMjgsIm5iZiI6MTcwMjM1MTgyOCwicGF0aCI6Ii84OTM5NTU0MS8yNTc5OTE3NjctZjk3YWM5YzctMTEyYS00MmYxLTlmZWUtMDI4NDYwOGVmOThhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjEyVDAzMzAyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNmM2M4YjE4Mzc5M2ZiZmUwNjNjZmNhZTFjNTJhZWRjNmI4ZTc3MzFiZmNlZjQ1NmViN2EwZGVmMzQxMGVjYzMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.T-9ta5PEX8u4_zZ8Qo0J1RKF7PUBbW-DCf4MXg9EzLo",
      url: "https://github.com/nurkholiqaganihafid/Time_Series_Covid19_World_Vaccination_Progress",
      description:
        "Analyzed daily COVID-19 vaccination trends using a time series approach with the LSTM model.",
      status: "completed",
    },
    {
      name: "Text Classification Video Games",
      difficulty: "intermediate",
      technology1: "python",
      image:
        "https://github.com/nurkholiqaganihafid/Text_Classification_Video_Games/assets/89395541/12736fb5-34a9-4af9-8ec0-8f70ca743362",
      url: "https://github.com/nurkholiqaganihafid/Text_Classification_Video_Games",
      description:
        'Game rating prediction: Used attributes such as "Rating" as well as other features such as "Title", "Developers", "Summary", "Platforms", and "Genres," using NLP.',
      status: "completed",
    },
    {
      name: "Image Classification Chessman",
      difficulty: "beginner",
      technology1: "python",
      image:
        "https://github.com/nurkholiqaganihafid/Image_Classification_Chessman/assets/89395541/8851cf91-0828-4ea5-9d00-47cbb63b2cc9",
      url: "https://github.com/nurkholiqaganihafid/Image_Classification_Chessman",
      description:
        "Comparison of not using transfer learning and using transfer learning",
      status: "completed",
    },
    {
      name: "Image Classification Rock Paper Scissors",
      difficulty: "beginner",
      technology1: "python",
      image:
        "https://github.com/nurkholiqaganihafid/Image_Classification_RockPaperScissors/assets/89395541/12c14ade-3742-4185-806c-2a227bb7f9ec",
      url: "https://github.com/nurkholiqaganihafid/Image_Classification_RockPaperScissors",
      description:
        "Artificial neural network program using TensorFlow. This program is able to recognize the shape of the hand that forms rock, scissors and paper.",
      status: "completed",
    },
    // {
    //   name: "",
    //   difficulty: "",
    //   technology1: "",
    //   technology2: "",
    //   technology3: "",
    //   image: "",
    //   url: "",
    //   description: "",
    //   status: "completed",
    // },
    // Add more projects as needed
  ];

  const projectList = document.getElementById("projectList");
  const difficultyFilter = document.getElementById("difficultyFilter");
  const technologyFilter = document.getElementById("technologyFilter");
  const statusFilter = document.getElementById("statusFilter");

  function renderProjects() {
    const filteredProjects = projects.filter((project) => {
      const isDifficultyMatch =
        difficultyFilter.value === "all" ||
        project.difficulty === difficultyFilter.value;

      const isTechnologyMatch =
        technologyFilter.value === "all" ||
        [
          project.technology1,
          project.technology2,
          project.technology3,
        ].includes(technologyFilter.value);

      const isStatusMatch =
        statusFilter.value === "all" || project.status === statusFilter.value;

      return isDifficultyMatch && isTechnologyMatch && isStatusMatch;
    });

    projectList.innerHTML = "";
    filteredProjects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.classList.add("project");

      // Create an array of technologies without undefined values
      const technologies = [
        project.technology1,
        project.technology2,
        project.technology3,
      ].filter((technology) => technology);

      projectItem.innerHTML = `
                  <a href="${project.url}" class="card-body" target="_blank">
                  <div class="image-holder">
                  <img src="${project.image}" alt="${project.name}">
                  </div>

                  <div class="card-footer">
                  <h3>${project.name}</h3>
                  <p>Difficulty: <span class="highlight">${
                    project.difficulty
                  }</span></p>
                  <p>Technology: <span class="highlight">${technologies.join(
                    ", "
                  )}</span></p>
                  <p>Status: <span class="highlight">${
                    project.status
                  }</span></p>
                  </div>
                  </a>

                  <div class="project-popup">
                  <p>${project.description}</p>
                  </div>
              `;
      projectList.appendChild(projectItem);
    });
  }

  difficultyFilter.addEventListener("change", renderProjects);
  technologyFilter.addEventListener("change", renderProjects);
  statusFilter.addEventListener("change", renderProjects);

  renderProjects();
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const top = window.scrollY;
  if (top >= 50) {
    header.style.backgroundColor = "#000c1f";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
