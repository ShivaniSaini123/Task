import profileImage from '../assets/img.png';

const SecondPage = () => {
  return (
    <div style={{
      textAlign: 'center',
      padding: '50px',
      backgroundColor: '#141414', // Dark background to fit the Squid Game theme
      color: '#fff',
      fontFamily: 'Arial, sans-serif',
      background: 'url(/path-to-squid-game-pattern.png)', // Add Squid Game inspired background
      backgroundSize: 'cover',
      minHeight: '100vh',
    }}>
      <div style={{
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '20px',
        padding: '30px',
        display: 'inline-block',
      }}>
        <img
          src={profileImage}
          alt="Shivani Saini"
          style={{
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            border: '5px solid #f00', // Red border to match the Squid Game theme
          }}
        />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f00' }}>Shivani Saini</h1>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold'  }}>Registration Number: 20235078</p>

        <button
          onClick={() => window.open("https://www.instagram.com/shivanisaini5428/", "_blank")}
          style={{
            padding: '15px 30px',
            backgroundColor: '#f00',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            borderRadius: '10px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#d00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#f00'}
        >
          My Instagram Account
        </button>
      </div>
    </div>
  );
};

export default SecondPage;
