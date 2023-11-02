const ProfileDescription = () => {
  return (
    <>
      <div className="flex justify-center mb-8">
        <img
          src="https://avatars.githubusercontent.com/u/19965233?v=4"
          alt="Alfi Samudro"
          className="rounded-full w-48 h-48"
        />
      </div>

      <div className="text-2xl font-bold text-blue-50">Hi there 👋</div>
      <h1 className="text-6xl font-bold text-blue-100 leading-snug">
        My name is <span className="text-orange-200">Alfi</span>
      </h1>
      <div className="text-3xl font-bold text-green-200">
        Full-stack developer 🧑‍💻
      </div>

      <p className="text-gray-100 text-lg font-mono py-4">
        Proficient full stack developer. Frontend, backend, API, git, database,
        third party integration, payment gateway integration, cloud computing,
        etc.
      </p>
    </>
  );
};

export default ProfileDescription;
