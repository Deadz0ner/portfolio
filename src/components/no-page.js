const noPage = () => {
  return (
    <div style={{
      minHeight: '100vh-60px',
      background: '#070707',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '2.2rem',
      letterSpacing: '1px',
    }}>
      <div style={{ fontSize: '5rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</div>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Page Not Found</div>
      <div style={{ color: '#888', fontSize: '1rem' }}>The page you are looking for does not exist.</div>
    </div>
  );
};

export default noPage;