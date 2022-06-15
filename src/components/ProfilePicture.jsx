function ProfilePicture(props) {

    const { list_imageUrl: imageUrl } = props.profiles;

    let isConnected = Math.random();
    
  return(
    <div>
      <div className="relative w-52 h-52">
        <div>
        <img className="rounded-full border-4 border-black overflow-hidden w-52 h-52 object-cover" src={imageUrl} alt="profile portrait" />
        </div>

         <div className={`absolute top-3 right-6 ${isConnected < 0.5 ? "bg-green-500" : "bg-red-600"} h-7 w-7 rounded-full z-10`}></div>
      </div>
    </div>
  );
};

export default ProfilePicture;