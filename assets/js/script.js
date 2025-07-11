document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      name: "Customer Growth Insights Dashboard",
      difficulty: "advanced",
      technology1: "SQL",      
      technology2: "python",
      technology3: "tableau",
      image:
        "https://github.com/user-attachments/assets/abf819f0-a6b9-4497-ada0-eb24943c4248",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/GrowthDataAnalysis/Dashboard1",
      description:
        "This dashboard presents a customer growth analysis over time, leveraging SQL and Python to process data from Customer 365. The final visualizations are built in Tableau to deliver a comprehensive view of business performance on a monthly basis.",
      status: "completed",
    },
    {
      name: "Customer Interaction and Experience Analysis",
      difficulty: "advanced",
      technology1: "SQL",
      technology2: "tableau",
      image:
        "https://github.com/user-attachments/assets/5463f047-e9ec-43a0-a634-e5812c861750",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/CustomerInteractionandExperienceAnalysis/Overview",
      description:
        "Analyzing user behavior (students) on an online learning platform to understand their level of engagement, distinguish the behavior between free and paid users, measure the effectiveness of learning materials, and evaluate trends in exam participation.",
      status: "completed",
    },
    {
      name: "Customer Churn Analysis – Databel Telecom",
      difficulty: "intermediate",
      technology1: "tableau",
      image:
        "https://github.com/user-attachments/assets/09c60d5a-14ef-4a44-ae2d-ace5742445b4",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/CustomerChurnAnalysisDatabelTelecom/Overview",
      description:
        "This analysis aims to understand the patterns and key factors influencing customer churn at the fictional telecom company, Databel. Using interactive visualizations in Tableau, it helps identify customer segments with the highest churn risk and provides insights to support more effective retention strategies.",
      status: "completed",
    },
    {
      name: "Employee Gender Distribution Analysis",
      difficulty: "intermediate",
      technology1: "SQL",
      technology2: "tableau",
      image:
        "https://github.com/user-attachments/assets/7cb12771-9ef1-4cd4-8ccf-0bd5837cebfb",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/EmployeeDistributionAnalysisSince1990/Dashboard1",
      description:
        "This analysis reveals the gender distribution in companies from 1990 to 2002, highlighting the number of male and female employees and their representation in managerial positions in various departments. In addition, this analysis evaluates the gender pay gap and allows exploration of compensation trends in each division through department filters.",
      status: "completed",
    },
    {
      name: "Career Track Analysis: Student Enrollments & Completions (2022)",
      difficulty: "beginner",
      technology1: "SQL",
      technology2: "tableau",
      image:
        "https://github.com/user-attachments/assets/90f61ad3-ce58-4361-a5ce-7ca91f4e7a3e",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/CareerTrackAnalysisStudentEnrollmentsandCompletions/Dashboard2FIX",
      description:
        "This dashboard is designed to analyze the enrollment and completion patterns of Career Tracks, as well as identify factors that influence students' success in completing the program. This analysis provides valuable insights for the company to develop more effective strategies to enhance the learning experience. Additionally, it helps students choose the most suitable learning strategies and subscription plans based on their goals.",
      status: "completed",
    },
    {
      name: "Student Onboarding Survey Analysis",
      difficulty: "intermediate",
      technology1: "tableau",
      image:
        "https://github.com/user-attachments/assets/5f147685-c732-4766-b39a-20f15a859b91",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/StudentOnboardingAnalysis_17392546093760/Dashboard1",
      description:
        "This analysis provides valuable insights into how students interact with the platform during onboarding, as well as the factors that influence their engagement. By understanding students’ sources of information, career goals, and learning interests, companies can improve onboarding strategies, tailor curriculum, and optimize marketing campaigns to increase student engagement and retention on these e-learning platforms.",
      status: "completed",
    },
    {
      name: "Sales and Profitability Analysis in FMCG Industry",
      difficulty: "intermediate",
      technology1: "tableau",
      image:
        "https://github.com/user-attachments/assets/68cdd397-6104-422b-acc4-e559c8176700",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/BusinessPerformanceDashboardSalesProfitandDistributionInsights/DrinkoReport",
      description:
        "The purpose of this analysis is to understand business performance in the Fast Moving Consumer Goods (FMCG) industry in order to increase profitability, understand customer needs and optimize distribution and marketing strategies.",
      status: "completed",
    },
    {
      name: "Exploring User Engagement in Newsfeed Features",
      difficulty: "beginner",
      technology1: "tableau",
      image:
        "https://github.com/user-attachments/assets/4b0254d7-9b24-42a0-a1c2-39ba24d65541",
      url: "https://public.tableau.com/app/profile/nurkholiq.agani.hafid/viz/ExploringUserEngagementinNewsfeedFeatures/Dashboard2",
      description:
        "The aim of this Newsfeed Analysis is to determine which type resonates more with audience and identify potential issues with these features, along with suggestions for enhancements. These visualizations provide crucial information about the newsfeed and how the users react to it.",
      status: "completed",
    },
    {
      name: "Baby Care Product Analysis Using Pivot Tables in Excel",
      difficulty: "advanced",
      technology1: "excel",
      image:
        "https://github.com/nurkholiqaganihafid/baby-care-product-analysis-using-pivot-tables-in-excel/assets/89395541/d7b87157-0520-48f1-bae7-ade46cde1c7d",
      url: "https://github.com/nurkholiqaganihafid/baby-care-product-analysis-using-pivot-tables-in-excel",
      description:
        "Worked with real-world FMCG data in the baby care segment to derive structured reports, giving decision-makers the flexibility to analyze performance.</p>There is no explanation yet in README.txt",
      status: "completed",
    },
    {
      name: "Football Transfers Analysis in Excel",
      difficulty: "intermediate",
      technology1: "excel",
      image:
        "https://github.com/nurkholiqaganihafid/football-transfers-analysis-in-excel/assets/89395541/8056368b-8a4a-4818-8996-6c096f15b9f3",
      url: "https://github.com/nurkholiqaganihafid/football-transfers-analysis-in-excel",
      description:
        "Understanding football economics by analyzing international transfer data in football in the US, spanning two seasons (2021/2022 and 2022/2023).</p>There is no explanation yet in README.txt",
      status: "completed",
    },
    {
      name: "Customer Engagement Analysis in Excel",
      difficulty: "beginner",
      technology1: "excel",
      image:
        "https://github.com/nurkholiqaganihafid/customer-engagement-analysis-in-excel/assets/89395541/5280ca7b-3913-46b8-8668-8e6f604fc6c8",
      url: "https://github.com/nurkholiqaganihafid/customer-engagement-analysis-in-excel/tree/main",
      description:
        "Provided insight into the effectiveness of adding new features to the platform and assisted in decision-making to increase student engagement.",
      status: "completed",
    },
    {
      name: "Calculating Free-to-Paid Conversion Rate with SQL",
      difficulty: "beginner",
      technology1: "SQL",
      technology2: "python",
      image:
        "https://github.com/nurkholiqaganihafid/calculating-free-to-paid-conversion-rate-with-sql/assets/89395541/6327af5c-add8-456b-a948-779155182dd6",
      url: "https://github.com/nurkholiqaganihafid/calculating-free-to-paid-conversion-rate-with-sql",
      description:
        "Estimated the fraction of students who purchase a subscription after starting college, namely the conversion rate from free to paid among engaged students, calculated several other key metrics, and analyzed the results.",
      status: "completed",
    },
    {
      name: "E-Commerce Marketplace Analysis",
      difficulty: "intermediate",
      technology1: "python",
      technology2: "streamlit",
      image:
        "https://github.com/nurkholiqaganihafid/E_Commerce_Marketplace_Analysis/assets/89395541/c6e2b4f6-64a9-442a-ac38-26a0140a667b",
      url: "https://github.com/nurkholiqaganihafid/E_Commerce_Marketplace_Analysis",
      description:
        "Provided valuable insights to e-commerce businesses on optimizing sales strategies, increasing customer satisfaction, and optimizing product delivery.",
      status: "completed",
    },
    {
      name: "Predict daily sales of Kalbe products",
      difficulty: "advanced",
      technology1: "python",
      technology2: "SQL",
      technology3: "tableau",
      image:
        "https://github.com/nurkholiqaganihafid/Kalbe_Nutritionals_Data_Scientist_Project/assets/89395541/043615cf-8be3-4885-984e-b8a3df66eab9",
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
        "https://github.com/nurkholiqaganihafid/Online_Fashion_Data_Analysis/assets/89395541/b2953718-3ac9-4f39-af8b-63f2df9ee8e4",
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
        "https://github.com/nurkholiqaganihafid/Online_Fashion_Data_Analysis/assets/89395541/ce59b58d-0373-4054-9dcf-4d1bdd24fc5c",
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
        "https://github.com/nurkholiqaganihafid/Time_Series_Covid19_World_Vaccination_Progress/assets/89395541/f97ac9c7-112a-42f1-9fee-0284608ef98a",
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
    //   image: "assets/image/dummy-cover.jpg",
    //   url: "",
    //   description: "",
    //   status: "completed or in progress",
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
