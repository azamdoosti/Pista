function contact() {
  const enter = "Enter Name : ";
  return (
    <div>
      <lable classname="lable" for="name">
        {enter}
      </lable>
      <input type="text"></input> <br></br>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        submit
      </button>
    </div>
  );
}
export default contact;
