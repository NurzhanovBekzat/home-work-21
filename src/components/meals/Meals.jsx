import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "../UI/card/Card";
import { MealItem } from "./MealItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoods } from "../../store/meals/mealsThunk";
import { SnackBar } from "../UI/SnackBar";

export const Meals = () => {
  const { meals } = useSelector((state) => state.meals);

  const [snackBar, setSnackbar] = useState({
    open: true,
    severity: "",
    message: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoods());
  }, [dispatch]);

  function successHandler() {
    setSnackbar((prev) => ({
      ...prev,
      open: true,
      severity: "success",
      message: "SuccessFully",
    }));
  }

  function oncloseHandler() {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  }

  function errorHandler() {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
      severity: "error",
      message: "rtrerer",
    }));
  }

  return (
    <Container>
      <SnackBar
        open={snackBar.open}
        handleClose={oncloseHandler}
        severity={snackBar.severity}
        message={snackBar.message}
      />
      <Card>
        {meals?.map((meal) => (
          <MealItem
            key={meal._id}
            meal={meal}
            successHandler={successHandler}
            errorHandler={errorHandler}
          />
        ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 135px;
  margin-bottom: 100px;
`;
