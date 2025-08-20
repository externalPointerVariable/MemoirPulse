import memoirpulse from '../assets/memoirpulse.png';

function Logo({ width = '100px' }) {
  return (
    <div>
      <img
        src={memoirpulse}
        alt="MemoirPulse Logo"
        style={{ width }}
      />
    </div>
  );
}

export default Logo;