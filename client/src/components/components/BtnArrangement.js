import Button from "./Btn";
const BtnArrangement = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "80vw",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "rgb(18 18 18/80%)",
        borderRadius: "1rem",
        padding: "2vw",
        zIndex: "2",
        position: "fixed",
        bottom: 0,
        left: "10vw",
        right: "10vw",
      }}
    >
      <Button title="Home" url="/" />
      <Button title="Earn" url="/earn" />
      <Button title="Invite" url="/invite" />
      <Button title="Wallet" url="/wallet" />
    </div>
  );
};

export default BtnArrangement;
