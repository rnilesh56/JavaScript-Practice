const UserCard = ({ user }) => {
  return (
    <>
      <div className="bg-amber-100 m-5  flex flex-col items-center justify-center gap-4 text-black w-90 h-90">
        <p className="font-bold text-xl">{user.name}</p>
        <img
          src={user.image}
          alt="image"
          className="w-[45%] h-[50%] object-contain  rounded-[50%]"
        />
        <p className="text-center m-4">{user.description}</p>
      </div>
    </>
  );
};

export default UserCard;
