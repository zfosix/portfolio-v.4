import { motion } from 'framer-motion';

const CityLayout = () => {
  const cityLayoutStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: '10px',
    padding: '20px',
  };

  const boxStyle = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  return (
    <div style={cityLayoutStyle}>
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={index}
          style={boxStyle}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {index + 1}
        </motion.div>
      ))}
    </div>
  );
};

export default CityLayout;