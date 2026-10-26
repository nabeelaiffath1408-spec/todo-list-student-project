# 🎓 Student Marks Calculator

A beginner-friendly web project that calculates a student's total marks, percentage, grade, and pass/fail status.

## Features
- Enter a student name.
- Choose between 3 and 8 subjects.
- Enter marks out of 100 for each subject.
- Calculate total marks and percentage.
- Display a grade and pass/fail result.
- Validate marks from 0 to 100.
- Print the result summary.
- Responsive layout for mobile and desktop.

## Technologies
- HTML
- CSS
- JavaScript

## How to run
1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Enter the student's name and marks.
4. Select **Calculate result**.

No installation or server is required.

## Grading rules used
A student must score at least 35 in every subject to pass.

| Percentage | Grade |
|---|---|
| 90–100% | A+ |
| 80–89.99% | A |
| 70–79.99% | B |
| 60–69.99% | C |
| 50–59.99% | D |
| Below 50% (all subjects passed) | E |
| Any subject below 35 | F / Fail |

These are sample rules for this project. Change them in `script.js` if your college uses a different grading scheme.

## Project structure
```text
student-marks-calculator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## GitHub Pages
To publish the project, open your repository on GitHub, go to **Settings → Pages**, select **Deploy from a branch**, choose the `main` branch and `/ (root)` folder, then save. Wait for GitHub Pages to publish the site.
