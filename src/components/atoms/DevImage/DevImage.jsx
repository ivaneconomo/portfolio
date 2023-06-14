import photo from '../../../assets/img/yo_reduced.jpg';

const DevImage = () => {
  return (
    <div className=''>
      <img
        style={{
          width: '200px',
          height: '400px',
          minWidth: '50px',
          objectFit: 'cover',
        }}
        src={photo}
        alt='Iván Ecónomo Photo'
        className='rounded opacity-50 grayscale'
      />
    </div>
  );
};

export default DevImage;
