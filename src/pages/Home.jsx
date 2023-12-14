import React from "react";
import Container from "../components/container/Container";
import Header from "../components/header/Header";
import Add from "../components/add/AddTodo";
import Tasks from "../components/Tasks/Tasks";
import Pending from "../components/pending/Pending";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Add />
        <Tasks />
        <Pending />
      </Container>
    </>
  );
}
