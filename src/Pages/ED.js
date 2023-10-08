import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../util/fetchData";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import { ExerciseVideo } from "../components/ExerciseVideo";

const ED = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equpmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBURL = "https://exercisedb.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDBURL}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setexerciseDetail(exerciseDetailData);
      console.log(exerciseDetailData);
      const targetMuscleExercisesData = await fetchData(
        `${exerciseDBURL}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(
        `${exerciseDBURL}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises  targetMuscleExercises={targetMuscleExercises} equipmentExercises = {equpmentExercises}/>
      <ExerciseVideo />
    </Box>
  );
};

export default ED;
