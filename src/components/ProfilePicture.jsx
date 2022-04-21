function ProfilePicture(props) {

  return(
    <div>
      <img className="rounded-full border-4 border-black" src={profiles.imageUrl} alt="profile portrait" />
      <div className="isConnected bg-green-700 h-7 w-7 rounded-full"></div>
    </div>
  );
};