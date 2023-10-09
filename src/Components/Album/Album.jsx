
import AlbumData from '../../../public/Album.json'
const Album = () => {
    const photos = AlbumData
    console.log(photos)
    return (
        <div className='relative top-28 mb-40 md:mx-6  lg:mx-14'>
            <h1 className='text-center text-4xl mb-4 font-semibold text-blue-600'>Moments in Time: Our Photo Collection</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    photos.map(data =>
                        <img className='w-[350px] h-[250px] rounded-lg shadow-md
                        md:transition md:ease-in-out delay-100 md:hover:-translate-y-1 md:hover:scale-110  duration-300' key={data.id} src={data.url} alt='Our Album'></img>)
                }
            </div>
        </div>
    );
};

export default Album;