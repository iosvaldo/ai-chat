import NewChat from "./NewChat"


function SideBar() {
  return (
    <div className="p-2 flex flex-col ">
      <div className="flex-1 ">
        <div>
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* Map through  the Chat rows*/}
        </div>
      </div>
    </div>
  );
}

export default SideBar