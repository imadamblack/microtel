import Image from "next/image";
import allLocationes from '../../public/AllLocationes/allLocationes.png'


const AllLocations = ({ titulo, comentario}) => {
  return (
    <div className='max-w-[1120px] mx-auto mt-10 px-[30px] w-full py-3' id="AllLocations">
      <div className="text-5xl font-semibold font-nunito  relative">{ titulo }</div>
      <p className="text-2xl text-justify py-3 mt-10">{ comentario }</p>
      <Image
      width={1920}
      height={1080}
      src={allLocationes}
      objectFit="cover"
      
      />
    </div>
  );
};

export default AllLocations;