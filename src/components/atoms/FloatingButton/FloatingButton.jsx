import { MailIcon } from "../icons/icons";

const FloatingButton = () => {
  const handleClick = () => {
    window.location.href = "mailto:ivan.economo39@gmail.com";
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col justify-center items-center gap-2">
    <span className="font-semibold text-gray-950 dark:text-slate-50 hidden md:flex">¡Contáctame!</span>
      <button
        className="rounded-full bg-gradient-to-tr from-pistachio-500 to-cyan-500 p-4 text-white shadow-lg"
        onClick={handleClick}
      >
        <MailIcon />
      </button>
    </ div>
  );
};

export default FloatingButton;
