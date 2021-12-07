CREATE TYPE ExerciseType as ENUM('CARDIO', 'CALISTHENICS', 'WEIGHTS');

CREATE TABLE Exercise(
id BIGSERIAL PRIMARY KEY,
name TEXT,
exerciseType ExerciseType
);

CREATE TABLE ExerciseTarget(
id BIGSERIAL PRIMARY KEY,
exerciseID INT REFERENCES Exercise(id),
time INT,
distance INT,
sets INT,
reps INT,
weight INT
);

CREATE TABLE ExerciseDataPoint(
id BIGSERIAL PRIMARY KEY,
exerciseID INT REFERENCES Exercise(id),
timeAchieved INT,
distanceAchieved INT,
setsAchieved INT,
repsAchieved INT,
weightAchieved INT
);

CREATE TABLE Workouts(
id BIGSERIAL PRIMARY KEY,
name TEXT,
listOfExerciseTargets INT REFERENCES ExerciseTarget(id)
);