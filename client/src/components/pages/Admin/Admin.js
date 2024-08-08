const Admin = ({ task, setTask }) => {
  // const [task, setTask] = useState({ type: "", value: "", url: "" });

  const setting = (e) => {
    const target = e.target.id;
    // console.log("target", target);
    if (target === "type") {
      setTask({ ...task, type: e.target.value });
    } else if (target === "url") {
      setTask({ ...task, url: e.target.value });
    } else if (target === "title") {
      setTask({ ...task, title: e.target.value });
    } else if (target === "earn") {
      setTask({ ...task, earn: e.target.value });
    }
  };
  return (
    <div>
      <Slide label="withdraw" />
      <Slide label="daily attemp limitation" />
      <Slide label="probability" />
      <div>
        <form className="form-group admin-task">
          <div>
            <div>Task type</div>
            <select
              className="form-control"
              id="type"
              onClick={setting}
              required
            >
              <option value="" style={{ visibility: "hidden" }}></option>
              <option value="yutube">Yutube</option>
              <option value="tweeter">Tweeter</option>
              <option value="telegram">Telegram</option>
            </select>
          </div>
          {/* <InputText label="task" /> */}
          <InputText label="Task title" id="title" onChange={setting} />
          <InputText label="Task URL" id="url" onChange={setting} />
          <InputText label="Task Earning" id="earn" onChange={setting} />
        </form>
      </div>
    </div>
  );
};

export default Admin;

const Slide = (props) => {
  return (
    <div className="admin-withdraw">
      <div className="admin-walletthreshold-text">{props.label}</div>
      <div className="admin-walletthreshold-slide">
        <input type="range" />
      </div>
    </div>
  );
};
const InputText = (props) => {
  return (
    <div>
      <div>{props.label}</div>
      <div>
        <input
          id={props.id}
          className="form-control"
          type="text"
          onChange={props.onChange}
          required
        ></input>
      </div>
    </div>
  );
};
