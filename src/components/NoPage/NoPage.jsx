const NoPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div>
        <h1 style={{textAlign: "center", fontSize: 100}}>404</h1>
        <p style={{fontSize: 30}}>There isn't a Pages site here.</p>
      </div>
    </div>
  );
};

export default NoPage;
