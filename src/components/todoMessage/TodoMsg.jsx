function TodoMsg(props) {
  console.log(props.allTodos);

  return (
    <div>
      <p>
        {props.allTodos.length > 0
          ? "Please complete all tods"
          : "Done for the day :)"}
      </p>
    </div>
  );
}

export default TodoMsg;
